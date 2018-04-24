import { createSelector } from 'reselect';

const getSections = state => state.sections || null;

const updatedTargets = (category, sectionSlug) =>
  category.targets.map(target => ({
    ...target,
    [sectionSlug]: target.indicators || []
  }));

export const parseCategories = createSelector(getSections, sections => {
  if (!sections) return null;
  const categories = [];
  sections.forEach(section => {
    section.categories.forEach(category => {
      const existingCategory = categories.find(c => category.slug === c.slug);
      if (!existingCategory) {
        const updatedCategory = category;
        updatedCategory.targets = updatedTargets(updatedCategory, section.slug);
        categories.push(updatedCategory);
      } else {
        const index = categories.indexOf(existingCategory);
        const targets = updatedTargets({ ...existingCategory }, section.slug);
        categories[index] = { ...categories[index], targets };
      }
    });
  });
  return categories;
});

export default {
  parseCategories
};
