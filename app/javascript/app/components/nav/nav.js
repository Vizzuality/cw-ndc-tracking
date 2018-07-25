import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from 'services/login.service';
import { setUser, navigateToLogin } from 'pages/login/login-actions';
import Component from './nav-component';

const mapStateToProps = state => ({
  location: state.location
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
    return createElement(Component, {
      ...this.props,
      actions: this.actions
    });
  }
}

NavContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, null)(NavContainer);
