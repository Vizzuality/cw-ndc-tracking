import { combineReducers } from 'redux';

// Router
import router from './router';
import sections from './providers/sections.provider';
import categories from './providers/categories.provider';
import targets from './providers/targets.provider';
import indicators from './providers/indicators.provider';
import { setUser } from './pages/login/login-reducers';

export default combineReducers({
  location: router.reducer,
  sections,
  categories,
  targets,
  indicators,
  user: setUser
});
