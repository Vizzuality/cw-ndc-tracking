import { connectRoutes, NOT_FOUND, redirect, push } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';
import restoreScroll from 'redux-first-router-restore-scroll';

import Planning from 'pages/planning';
import Tracking from 'pages/tracking';
import Reporting from 'pages/reporting';

import { getSectionsThunk } from './providers/sections.providers';
import { DEFAULT_TARGET } from './constants/defaults';

const history = createHistory();

export const HOME = 'location/HOME';
export const PLANNING = 'location/PLANNING';
export const PLANNING_CATEGORY = 'location/PLANNING_CATEGORY';
export const TRACKING = 'location/TRACKING';
export const TRACKING_CATEGORY = 'location/TRACKING_CATEGORY';
export const REPORTING = 'location/REPORTING';

export const routes = {
  [PLANNING_CATEGORY]: {
    label: 'Planning',
    path: '/planning/:category',
    component: Planning,
    thunk: getSectionsThunk
  },
  [PLANNING]: {
    label: 'Planning',
    path: '/planning',
    component: Planning,
    thunk: (dispatch, getState) => {
      getSectionsThunk(dispatch, getState);
      push(`/planning/${DEFAULT_TARGET}`);
    }
  },
  [TRACKING_CATEGORY]: {
    label: 'Tracking',
    path: '/tracking/:category',
    component: Tracking,
    thunk: getSectionsThunk
  },
  [TRACKING]: {
    label: 'Tracking',
    path: '/tracking',
    component: Tracking,
    thunk: (dispatch, getState) => {
      getSectionsThunk(dispatch, getState);
      push(`/tracking/${DEFAULT_TARGET}`);
    }
  },
  [REPORTING]: {
    label: 'Reporting',
    path: '/reporting',
    component: Reporting,
    thunk: getSectionsThunk
  },
  [HOME]: {
    path: '/',
    thunk: dispatch => dispatch(redirect({ type: PLANNING }))
  },
  [NOT_FOUND]: {
    path: '/404',
    thunk: dispatch => dispatch(redirect({ type: PLANNING }))
  }
};

const customRestoreScroll = restoreScroll({
  shouldUpdateScroll: (prev, locationState) => {
    if (!locationState.query) return true;
    const id = `${locationState.query.category}+${locationState.query.target}`;
    if (!id || prev.search === locationState.search) return true;
    const element = document.getElementById(id);
    if (!element) return true;
    const yOffset = element.getBoundingClientRect().y + window.scrollY;
    return [0, yOffset - 90];
  }
});

export default connectRoutes(history, routes, {
  querySerializer: queryString,
  restoreScroll: customRestoreScroll
});
