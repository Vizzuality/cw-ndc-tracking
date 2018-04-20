import { connect } from 'react-redux';

import TrackingComponent from './tracking-component';

const mapStateToProps = ({ location }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav)
});

export default connect(mapStateToProps, null)(TrackingComponent);
