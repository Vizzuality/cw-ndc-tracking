import { combineReducers } from 'redux';
// import { handleModule } from 'redux-tools';

// Router
import router from './router';
import sections from './layouts/root/root.ducks';

export default combineReducers({
  location: router.reducer,
  sections
});
