import { createSelector } from 'reselect';
import deburr from 'lodash/deburr';

const getSearch = state => state.search || null;
const getCategories = createSelector(
  state => state.sections,
  sections => {
    if (!sections || sections.length === 0) return null;
    return sections
      .find(section => section.slug === 'tracking')
      .categories.map(category => ({
        ...category,
        path: `/tracking/${category.slug}`
      }));
  }
);

export const filterCategoryTargetsBySearch = createSelector(
  [getCategories, getSearch],
  (categories, search) => {
    if (!categories) return null;
    if (!search) return categories;
    return categories.map(category => {
      const filteredTargets = category.targets.filter(
        t => deburr(t.title.toLowerCase()).indexOf(search.toLowerCase()) > -1
      );
      return {
        ...category,
        targets: filteredTargets
      };
    });
  }
);
