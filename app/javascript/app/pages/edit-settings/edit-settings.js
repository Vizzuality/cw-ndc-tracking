import { connect } from 'react-redux';
import { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import { editUser } from 'services/user.service';
import { setUser } from 'pages/login/login-actions';
import { navigateTo, SETTINGS } from 'router';
import Component from './edit-settings-component';

const mapStateToProps = ({ user, location }) => {
  const { page } = location.payload;
  const fields = {
    info: [
      {
        label: 'Name',
        slug: 'name',
        type: 'text',
        placeholder: 'Edit your name'
      },
      {
        label: 'Email',
        slug: 'email',
        type: 'text',
        placeholder: 'Edit your email'
      }
    ],
    password: [
      {
        label: 'Current password',
        slug: 'current_password',
        type: 'password',
        placeholder: 'Your current password'
      },
      {
        label: 'New password',
        description: "Leave it blank if you don't want to change it",
        slug: 'password',
        type: 'password',
        placeholder: 'Add a new password'
      },
      {
        label: 'Confirm Password',
        description: 'We need your current password to confirm your changes',
        slug: 'password_confirmation',
        type: 'password',
        placeholder: 'Confirm your new password'
      }
    ]
  };
  return {
    user,
    fields: page ? fields[page] : []
  };
};

class EditSettingsContainer extends PureComponent {
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
    const { user: prevUser } = this.props;
    const changedUserFields = user;
    Object.keys(user).forEach(k => {
      if (!user[k]) delete changedUserFields[k];
    });
    editUser(changedUserFields).then(ok => {
      if (ok) {
        dispatch(setUser({ ...prevUser, ...changedUserFields }));
        dispatch(navigateTo(SETTINGS));
      }
    });
  }

  render() {
    return createElement(Component, {
      ...this.props,
      handleValueChange: this.handleValueChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this)
    });
  }
}

EditSettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default connect(mapStateToProps, null)(EditSettingsContainer);
