import { combineReducers } from 'redux';

// Router
import router from './router';
import sections from './providers/sections.provider';
import categories from './providers/categories.provider';
import targets from './providers/targets.provider';
import indicators from './providers/indicators.provider';
import user from './providers/user.provider';

export default combineReducers({
  location: router.reducer,
  sections,
  categories,
  targets,
  indicators,
  user
});
