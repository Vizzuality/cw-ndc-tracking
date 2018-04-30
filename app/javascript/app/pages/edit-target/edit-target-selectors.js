import { createSelector } from 'reselect';
import deburr from 'lodash/deburr';
import toUpper from 'lodash/toUpper';

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
    if (!target || !target.indicators) return null;
    if (!search) return target.indicators || null;
    return target.indicators.filter(
      i => deburr(toUpper(i.title)).indexOf(search) > -1
    );
  }
);
