import { createSelector } from 'reselect';
import deburr from 'lodash/deburr';

const getSearch = state => state.search || null;
const getPlanning = state => state.planning || null;
const getCategories = createSelector(getPlanning, planning => {
  if (!planning || planning.length === 0) return null;
  return planning.categories.map(category => ({
    ...category,
    path: `/planning/${category.slug}`
  }));
});

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
