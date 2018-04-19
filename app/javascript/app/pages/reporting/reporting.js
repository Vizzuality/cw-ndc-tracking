import { connect } from 'react-redux';

import ReportingComponent from './reporting-component';

const mapStateToProps = ({ location }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav)
});

export default connect(mapStateToProps, null)(ReportingComponent);
