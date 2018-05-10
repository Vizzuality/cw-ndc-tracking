import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import deburr from 'lodash/deburr';

const getSections = state => state.sections || null;
const getSearch = state => state.search || null;
const getPlanning = state => state.planning || null;
const getTracking = state => state.tracking || null;

const getSection = createSelector(
  [getSections, state => state.section],
  (sections, section) => {
    if (!section || sections.length === 0) return null;
    return (sections && sections.find(s => s.slug === section)) || null;
  }
);
const getCategory = createSelector(
  [getSection, state => state.category, getPlanning, getTracking],
  (section, category, planning, tracking) => {
    if (section && section.slug === 'planning') {
      if (planning.length === 0) return null;
      return planning.categories.find(c => c.slug === category) || null;
    } else if (section && section.slug === 'tracking') {
      if (tracking.length === 0) return null;
      return tracking.categories.find(c => c.slug === category) || null;
    }
    return null;
  }
);
export const getTarget = createSelector(
  [getCategory, state => state.target],
  (category, target) => {
    if (!category) return null;
    return (category && category.targets.find(t => t.slug === target)) || null;
  }
);

export const getIndicators = createSelector([getTarget], target => {
  if (!target) return null;
  return target.indicators;
});

export const getIndicatorsWithSearch = createSelector(
  [getTarget, getSearch, getIndicators],
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
