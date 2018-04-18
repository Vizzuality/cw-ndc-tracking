import { connect } from 'react-redux';

import Component from './nav-component';

const actions = null;
// const actions = [{ name: 'Setup' }];

const mapStateToProps = ({ location }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav),
  actions
});

export default connect(mapStateToProps, null)(Component);
