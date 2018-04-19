import { connect } from 'react-redux';

import PlanningComponent from './planning-component';

const mapStateToProps = ({ location }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav)
});

export default connect(mapStateToProps, null)(PlanningComponent);
