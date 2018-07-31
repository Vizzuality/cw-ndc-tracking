import { connect } from 'react-redux';
import Component from './nav-component';

const mapStateToProps = ({ user, location }) => {
  const userName =
    user && user.data && `${user.data.first_name} ${user.data.last_name}`;
  return {
    hideNav: location && location.routesMap[location.type].noNav,
    userName
  };
};

export default connect(mapStateToProps, null)(Component);
