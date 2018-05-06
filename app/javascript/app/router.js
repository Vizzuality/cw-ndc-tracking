import { connectRoutes, NOT_FOUND, redirect, push } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';
import restoreScroll from 'redux-first-router-restore-scroll';

import Login from 'pages/login';
import Planning from 'pages/planning';
import Tracking from 'pages/tracking';
import Reporting from 'pages/reporting';
import EditTarget from 'pages/edit-target';

import { getSectionsThunk } from './providers/sections.provider';
import { getCategoriesThunk } from './providers/categories.provider';
import { getTargetsThunk } from './providers/targets.provider';
import { getIndicatorsThunk } from './providers/indicators.provider';

import { DEFAULT_TARGET } from './constants/defaults';

const history = createHistory();

export const HOME = 'location/HOME';
export const LOGIN = 'location/LOGIN';
export const PLANNING = 'location/PLANNING';
export const PLANNING_CATEGORY = 'location/PLANNING_CATEGORY';
export const TRACKING = 'location/TRACKING';
export const TRACKING_CATEGORY = 'location/TRACKING_CATEGORY';
export const REPORTING = 'location/REPORTING';
export const PLANNING_TARGET_EDIT = 'location/PLANNING_TARGET_EDIT';
export const TRACKING_TARGET_EDIT = 'location/TRACKING_TARGET_EDIT';

const dispatchPreFetchThunks = (...thunks) => async (...params) =>
  thunks.forEach(thunk => thunk(...params));

export const routes = {
  [PLANNING_CATEGORY]: {
    label: 'Planning',
    path: '/planning/:category',
    component: Planning,
    thunk: dispatchPreFetchThunks(
      getSectionsThunk,
      getCategoriesThunk,
      getTargetsThunk
    )
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
    thunk: dispatchPreFetchThunks(getSectionsThunk)
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
    thunk: dispatchPreFetchThunks(getSectionsThunk)
  },
  [LOGIN]: {
    path: '/login',
    component: Login
  },
  [HOME]: {
    path: '/',
    thunk: dispatch => dispatch(redirect({ type: PLANNING }))
  },
  [PLANNING_TARGET_EDIT]: {
    path: '/planning/:category/:target',
    component: EditTarget,
    thunk: dispatchPreFetchThunks(getSectionsThunk, getIndicatorsThunk)
  },
  [TRACKING_TARGET_EDIT]: {
    path: '/tracking/:category/:target',
    component: EditTarget,
    thunk: dispatchPreFetchThunks(getSectionsThunk, getIndicatorsThunk)
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
