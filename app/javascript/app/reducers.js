import { combineReducers } from 'redux';
// import { handleModule } from 'redux-tools';

// Router
import router from './router';
import sections from './providers/sections.providers';

export default combineReducers({
  location: router.reducer,
  sections
});
