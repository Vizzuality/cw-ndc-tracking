import { combineReducers } from 'redux';

// Router
import router from './router';
import sections from './providers/sections.provider';
import tracking from './providers/tracking.provider';
import planning from './providers/planning.provider';
import report from './providers/report.provider';
import { setUser } from './pages/login/login-reducers';

export default combineReducers({
  location: router.reducer,
  sections,
  tracking,
  planning,
  report,
  user: setUser
});
