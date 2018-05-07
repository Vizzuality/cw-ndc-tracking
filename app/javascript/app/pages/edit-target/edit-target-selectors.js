import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import deburr from 'lodash/deburr';

const getSections = state => state.sections || null;
const getSearch = state => state.search || null;
const getSection = createSelector(
  [getSections, state => state.section],
  (sections, section) =>
    (sections && sections.find(s => s.slug === section)) || null
);
const getCategory = createSelector(
  [getSection, state => state.category],
  (section, category) =>
    (section && section.categories.find(c => c.slug === category)) || null
);
export const getTarget = createSelector(
  [getCategory, state => state.target],
  (category, target) =>
    (category && category.targets.find(t => t.slug === target)) || null
);

export const getIndicators = createSelector(
  [getTarget, getSearch, state => state.indicators],
  (target, search, indicators) => {
    if (!target || !indicators) return null;
    if (!search) return sortBy(indicators, 'order');
    return sortBy(
      indicators.filter(
        i => deburr(i.title.toLowerCase()).indexOf(search.toLowerCase()) > -1
      ),
      'order'
    );
  }
);
