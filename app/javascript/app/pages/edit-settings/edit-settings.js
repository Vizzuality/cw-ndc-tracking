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
        label: 'First name',
        slug: 'first_name',
        type: 'text',
        placeholder: 'Edit your name'
      },
      {
        label: 'Last name',
        slug: 'last_name',
        type: 'text',
        placeholder: 'Edit your last name'
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
    user: user && user.data,
    fields: page ? fields[page] : []
  };
};

class EditSettingsContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        current_password: '',
        password_confirmation: ''
      }
    };
    this.userFieldsInitialized = false;
  }

  componentDidUpdate() {
    const { user: userProp } = this.props;
    if (!this.userFieldsInitialized && userProp) {
      this.initializeUserFields();
    }
  }

  initializeUserFields() {
    const { user } = this.state;
    const { user: userProp } = this.props;
    const fieldsToUpdate = ['first_name', 'last_name', 'email'];
    const updatedFields = {};
    fieldsToUpdate.forEach(field => {
      updatedFields[field] = (userProp && userProp[field]) || '';
    });
    this.setState({ user: { ...user, ...updatedFields } });
    this.userFieldsInitialized = true;
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
    const { user } = this.state;
    return createElement(Component, {
      ...this.props,
      handleValueChange: this.handleValueChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
      user
    });
  }
}

EditSettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default connect(mapStateToProps, null)(EditSettingsContainer);
