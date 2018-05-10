import { createSelector } from 'reselect';
import includes from 'lodash/includes';

const getReport = state => state.report || null;

const updatedTargets = (category, sectionSlug) =>
  category.targets.map(target => {
    const updatedTarget = { ...target };
    delete updatedTarget.indicators;
    return {
      ...updatedTarget,
      [sectionSlug]: target.indicators || []
    };
  });

const updateExistingCategoryTargets = (
  existingCategory,
  category,
  sectionSlug
) => {
  const updatedMatchingTargets = existingCategory.targets.map(
    existingTarget => {
      const matchingTarget = category.targets.find(
        t => t.slug === existingTarget.slug
      );
      if (matchingTarget) {
        const updatedTarget = { ...existingTarget };
        return {
          ...updatedTarget,
          [sectionSlug]: matchingTarget.indicators || []
        };
      }

      return { ...existingTarget };
    }
  );
  const existingTargetSlugs = (existingCategory.targets || []).map(t => t.slug);
  const notMatchingTargets =
    existingTargetSlugs.length > 0
      ? category.targets.filter(
        target => !includes(existingTargetSlugs, target.slug)
      )
      : null;
  const updatedNotMatchingTargets = notMatchingTargets
    ? updatedTargets({ targets: notMatchingTargets }, sectionSlug)
    : [];
  return updatedMatchingTargets.concat(updatedNotMatchingTargets);
};

// get existing category
// look for the targets with the same slug
// add the tracking: indicators to them

export const parseCategories = createSelector(getReport, report => {
  if (!report) return null;
  const categories = [];
  report.forEach(section => {
    section.categories.forEach(category => {
      const existingCategory = categories.find(c => category.slug === c.slug);
      if (!existingCategory) {
        const updatedCategory = category;
        updatedCategory.targets = updatedTargets(updatedCategory, section.slug);
        categories.push(updatedCategory);
      } else {
        const index = categories.indexOf(existingCategory);
        const targets = updateExistingCategoryTargets(
          { ...existingCategory },
          category,
          section.slug
        );
        categories[index] = { ...categories[index], targets };
      }
    });
  });
  return categories;
});

export default {
  parseCategories
};
