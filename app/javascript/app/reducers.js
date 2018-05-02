import { combineReducers } from 'redux';

// Router
import router from './router';
import sections from './providers/sections.providers';
import user from './providers/auth.providers';

export default combineReducers({
  location: router.reducer,
  sections,
  user
});
