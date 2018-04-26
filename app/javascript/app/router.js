import { connectRoutes, NOT_FOUND, redirect } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';
import restoreScroll from 'redux-first-router-restore-scroll';

import Planning from 'pages/planning';
import Tracking from 'pages/tracking';
import Reporting from 'pages/reporting';

import { getSectionsThunk } from 'layouts/root/root.ducks';

const history = createHistory();

export const HOME = 'location/HOME';
export const PLANNING = 'location/PLANNING';
export const PLANNING_CATEGORY = 'location/PLANNING_CATEGORY';
export const TRACKING = 'location/TRACKING';
export const TRACKING_CATEGORY = 'location/TRACKING_CATEGORY';
export const REPORTING = 'location/REPORTING';

export const routes = {
  [PLANNING_CATEGORY]: {
    nav: true,
    label: 'Planning',
    path: '/planning/:category',
    component: Planning,
    thunk: getSectionsThunk
  },
  [PLANNING]: {
    nav: true,
    label: 'Planning',
    path: '/planning',
    component: Planning,
    thunk: getSectionsThunk
  },
  [TRACKING_CATEGORY]: {
    nav: true,
    label: 'Tracking',
    path: '/tracking/:category',
    component: Tracking,
    thunk: getSectionsThunk
  },
  [TRACKING]: {
    nav: true,
    label: 'Tracking',
    path: '/tracking',
    component: Tracking,
    thunk: getSectionsThunk
  },
  [REPORTING]: {
    nav: true,
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
