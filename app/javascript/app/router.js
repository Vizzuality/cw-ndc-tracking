import { connectRoutes, NOT_FOUND, redirect, push } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';
import restoreScroll from 'redux-first-router-restore-scroll';

import Login from 'pages/login';
import Settings from 'pages/settings';
import ForgotPassword from 'pages/login/forgot-password';
import SignUp from 'pages/sign-up';
import EditSettings from 'pages/edit-settings';
import Planning from 'pages/planning';
import Tracking from 'pages/tracking';
import Reporting from 'pages/reporting';
import EditTarget from 'pages/edit-target';

import { getSectionsThunk } from './providers/sections.provider';
import { getIndicatorsThunk } from './providers/indicators.provider';
import { getUserThunk } from './providers/user.provider';

import { DEFAULT_TARGET } from './constants/defaults';

export const navigateTo = (route, payload) => ({ type: route, payload });

const history = createHistory();

export const HOME = 'location/HOME';
export const LOGIN = 'location/LOGIN';
export const SETTINGS = 'location/SETTINGS';
export const FORGOT_PASSWORD = 'location/FORGOT_PASSWORD';
export const SIGN_UP = 'location/SIGN_UP';
export const EDIT_SETTINGS = 'location/EDIT_SETTINGS';
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
    thunk: (dispatch, getState) => {
      getUserThunk(dispatch, getState);
      getSectionsThunk(dispatch, getState);
    }
  },
  [PLANNING]: {
    label: 'Planning',
    path: '/planning',
    component: Planning,
    thunk: (dispatch, getState) => {
      getUserThunk(dispatch, getState);
      getSectionsThunk(dispatch, getState);
      push(`/planning/${DEFAULT_TARGET}`);
    }
  },
  [TRACKING_CATEGORY]: {
    label: 'Tracking',
    path: '/tracking/:category',
    component: Tracking,
    thunk: (dispatch, getState) => {
      getUserThunk(dispatch, getState);
      getSectionsThunk(dispatch, getState);
    }
  },
  [TRACKING]: {
    label: 'Tracking',
    path: '/tracking',
    component: Tracking,
    thunk: (dispatch, getState) => {
      getUserThunk(dispatch, getState);
      getSectionsThunk(dispatch, getState);
      push(`/tracking/${DEFAULT_TARGET}`);
    }
  },
  [REPORTING]: {
    label: 'Reporting',
    path: '/reporting',
    component: Reporting,
    thunk: (dispatch, getState) => {
      getUserThunk(dispatch, getState);
      getSectionsThunk(dispatch, getState, true);
    }
  },
  [LOGIN]: {
    path: '/login',
    component: Login,
    noNav: true
  },
  [SIGN_UP]: {
    path: '/sign-up',
    component: SignUp,
    noNav: true
  },
  [SETTINGS]: {
    path: '/settings',
    component: Settings,
    thunk: (dispatch, getState) => {
      getUserThunk(dispatch, getState);
      getSectionsThunk(dispatch, getState, true);
    }
  },
  [EDIT_SETTINGS]: {
    path: '/settings/:page',
    component: EditSettings,
    thunk: (dispatch, getState) => {
      getUserThunk(dispatch, getState);
      getSectionsThunk(dispatch, getState, true);
    }
  },
  [FORGOT_PASSWORD]: {
    path: '/forgot-password',
    component: ForgotPassword
  },
  [HOME]: {
    path: '/',
    thunk: dispatch => dispatch(redirect({ type: PLANNING }))
  },
  [PLANNING_TARGET_EDIT]: {
    path: '/planning/:category/:target',
    component: EditTarget,
    thunk: dispatchPreFetchThunks(
      getUserThunk,
      getSectionsThunk,
      getIndicatorsThunk
    )
  },
  [TRACKING_TARGET_EDIT]: {
    path: '/tracking/:category/:target',
    component: EditTarget,
    thunk: dispatchPreFetchThunks(
      getUserThunk,
      getSectionsThunk,
      getIndicatorsThunk
    )
  },
  [NOT_FOUND]: {
    path: '/404',
    thunk: dispatch => dispatch(redirect({ type: PLANNING }))
  }
};

const customRestoreScroll = restoreScroll({
  shouldUpdateScroll: (prev, locationState) => {
    if (!locationState.query) return true;
    if (locationState.kind === 'push' && !locationState.payload.query) {
      return false;
    } // Don't scroll if changing the anchor while scrolling
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
