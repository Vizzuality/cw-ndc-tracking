import { connectRoutes, NOT_FOUND, redirect } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';

import Planning from 'pages/planning';
import Tracking from 'pages/tracking';
import Reporting from 'pages/reporting';

// import { prefetchSections } from 'layouts/root/root.ducks';

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
    component: Planning,
    thunk: async dispatch => {
      const sections = await fetch(
        'http://localhost:3000/api/v1/sections?includes[]=categories&includes[]=targets'
      ).then(function (response) {
        return response.json();
      });
      dispatch({ type: 'GET_SECTIONS', payload: sections });
    }
  },
  [TRACKING]: {
    nav: true,
    label: 'Tracking',
    path: '/tracking',
    component: Tracking,
    thunk: async dispatch => {
      const sections = await fetch(
        'http://localhost:3000/api/v1/sections?includes[]=categories&includes[]=targets'
      ).then(function (response) {
        return response.json();
      });
      dispatch({ type: 'GET_SECTIONS', payload: sections });
    }
  },
  [REPORTING]: {
    nav: true,
    label: 'Reporting',
    path: '/reporting',
    component: Reporting
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

export default connectRoutes(history, routes, {
  querySerializer: queryString
});
