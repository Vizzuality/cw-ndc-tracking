import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUser, navigateToLogin } from '../../pages/login/login-actions';
import { logout } from '../../services/login.service';
import Component from './nav-component';

const mapStateToProps = state => ({
  location: state.location
});

class NavContainer extends PureComponent {
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
    const actions = [
      {
        name: 'Logout',
        onClick: this.handleLogout
      }
    ];

    return createElement(Component, {
      ...this.props,
      actions
    });
  }
}

NavContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, null)(NavContainer);
