import { connect } from 'react-redux';
import Component from './nav-component';

const mapStateToProps = ({ location }) => ({
  hideNav: location && location.routesMap[location.type].noNav
});

export default connect(mapStateToProps, null)(Component);
