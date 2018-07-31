import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from 'services/login.service';
import { setUser, navigateToLogin } from 'pages/login/login-actions';
import { LOGIN, FORGOT_PASSWORD } from 'router';
import Component from './nav-component';

const mapStateToProps = ({ location }) => ({
  hideNav: location && location.routesMap[location.type].noNav
});

class NavContainer extends PureComponent {
  constructor() {
    super();
    this.actions = [
      {
        name: 'Logout',
        onClick: this.handleLogout
      }
    ];
    this.blacklist = [LOGIN, FORGOT_PASSWORD];
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    logout().then(ok => {
      if (ok) {
        dispatch(setUser({}));
        localStorage.setItem('CWTTT', '');
        localStorage.setItem('user', '');
        dispatch(navigateToLogin());
      }
    });
  };

  render() {
    const { location } = this.props;
    const hideNav = location && this.blacklist.includes(location.type);
    return hideNav
      ? null
      : createElement(Component, {
        ...this.props,
        actions: this.actions
      });
  }
}

NavContainer.propTypes = {
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, null)(NavContainer);
