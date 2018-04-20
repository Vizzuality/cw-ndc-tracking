import { connectRoutes, NOT_FOUND, redirect } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';

import Home from 'pages/home';
import Planning from 'pages/planning';
import Tracking from 'pages/tracking';
import Reporting from 'pages/reporting';

const history = createHistory();

export const HOME = 'location/HOME';
export const PLANNING = 'location/PLANNING';
export const TRACKING = 'location/TRACKING';
export const REPORTING = 'location/REPORTING';

export const routes = {
  [PLANNING]: {
    nav: true,
    label: 'Planning',
    path: '/planning',
    component: Planning
  },
  [TRACKING]: {
    nav: true,
    label: 'Tracking',
    path: '/tracking',
    component: Tracking
  },
  [REPORTING]: {
    nav: true,
    label: 'Reporting',
    path: '/reporting',
    component: Reporting
  },
  [HOME]: {
    path: '/',
    component: Home
  },
  [NOT_FOUND]: {
    path: '/404',
    thunk: dispatch => dispatch(redirect({ type: HOME }))
  }
};

export default connectRoutes(history, routes, {
  querySerializer: queryString
});
