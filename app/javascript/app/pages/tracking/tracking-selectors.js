import { createSelector } from 'reselect';
import deburr from 'lodash/deburr';

const getSearch = state => state.search || null;
const getTracking = state => state.tracking || null;

const getCategories = createSelector(getTracking, tracking => {
  if (!tracking || tracking.length === 0) return null;
  return tracking.categories.map(category => ({
    ...category,
    path: `/tracking/${category.slug}`
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
