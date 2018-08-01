import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { navigateTo, LOGIN, SETTINGS } from 'router';
import { logout } from 'services/login.service';
import { PropTypes } from 'prop-types';
import { deleteUser } from 'providers/user.provider';
import Component from './user-menu-component';

const mapStateToProps = () => ({});

class UserMenuContainer extends PureComponent {
  constructor() {
    super();
    this.userMenuOptions = [
      {
        label: 'SETTINGS',
        path: { type: SETTINGS }
      },
      {
        label: 'LOGOUT',
        action: this.handleLoginThunk.bind(this)
      }
    ];
  }

  handleLoginThunk() {
    const { dispatch } = this.props;
    logout().then(ok => {
      if (ok) {
        dispatch(deleteUser());
        localStorage.setItem('CWTTT', '');
        localStorage.setItem('user', '');
        dispatch(navigateTo(LOGIN));
      }
    });
  }

  render() {
    return createElement(Component, {
      ...this.props,
      userMenuOptions: this.userMenuOptions
    });
  }
}

UserMenuContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, null)(UserMenuContainer);
