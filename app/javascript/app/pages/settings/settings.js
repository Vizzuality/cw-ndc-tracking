import { connect } from 'react-redux';
import { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import { editUser } from 'services/user.service';
import { setUser } from 'pages/login/login-reducers';
import Component from './settings-component';

const mapStateToProps = state => ({ user: state.user });

class SettingsContainer extends PureComponent {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      user: {
        name: user.name || null,
        email: user.email || null,
        password: null,
        current_password: null,
        password_confirmation: null
      }
    };
  }

  handleValueChange(field, value) {
    const { user } = this.state;
    this.setState({ user: { ...user, [field]: value } });
  }

  handleSubmit() {
    // TODO: Add validation
    this.handleEditUser();
  }

  handleEditUser() {
    const { dispatch } = this.props;
    const { user } = this.state;
    this.handleEditUser();
    editUser(user).then(function (data) {
      dispatch(setUser(data));
    });
  }

  render() {
    return createElement(Component, {
      ...this.props,
      handleValueChange: this.handleValueChange.bind(this),
      handleSubmit: this.handleSubmit
    });
  }
}

SettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default connect(mapStateToProps, null)(SettingsContainer);
