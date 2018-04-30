import { createSelector } from 'reselect';
import deburr from 'lodash/deburr';
import { indicators } from '../../mocks/sections';

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
  [getTarget, getSearch],
  (target, search) => {
    const ind = indicators;
    if (!target || !ind) return null;
    if (!search) return ind;
    return ind.filter(
      i => deburr(i.title.toLowerCase()).indexOf(search.toLowerCase()) > -1
    );
  }
);
