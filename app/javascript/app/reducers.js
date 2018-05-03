import { combineReducers } from 'redux';

// Router
import router from './router';
import sections from './providers/sections.providers';
import { setUser } from './pages/login/login-reducers';

export default combineReducers({
  location: router.reducer,
  sections,
  user: setUser
});
