import { connect } from 'react-redux';
import { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import { editUser } from 'services/user.service';
import { setUser } from 'pages/login/login-actions';
import { navigateTo, SETTINGS, LOGIN } from 'router';
import {
  editDataErrorMessages,
  editPasswordErrorMessages
} from 'utils/edit-settings-validation';
import isEmpty from 'lodash/isEmpty';
import Component from './edit-settings-component';

const mapStateToProps = ({ user, location }) => {
  const { page } = location.payload;
  const fields = {
    info: [
      {
        label: 'First name',
        slug: 'first_name',
        type: 'text',
        placeholder: 'Edit your name',
        required: true
      },
      {
        label: 'Last name',
        slug: 'last_name',
        type: 'text',
        placeholder: 'Edit your last name',
        required: true
      },
      {
        label: 'Email',
        slug: 'email',
        type: 'text',
        placeholder: 'Edit your email',
        required: true
      }
    ],
    password: [
      {
        label: 'Current password',
        slug: 'current_password',
        type: 'password',
        placeholder: 'Your current password',
        required: true
      },
      {
        label: 'New password',
        slug: 'password',
        type: 'password',
        placeholder: 'Add a new password',
        required: true
      },
      {
        label: 'Confirm Password',
        slug: 'password_confirmation',
        type: 'password',
        placeholder: 'Confirm your new password',
        required: true
      }
    ]
  };
  return {
    user: user && user.data,
    fields: page ? fields[page] : [],
    page
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
      },
      errors: {}
    };
    this.userFieldsInitialized = false;
  }

  componentDidUpdate() {
    const { user: userProp } = this.props;
    if (!this.userFieldsInitialized && userProp) {
      this.initializeUserFields();
    }
  }

  getFieldsToValidate() {
    const { user } = this.state;
    const { fields } = this.props;
    const fieldsToValidate = {};
    Object.keys(user).forEach(f => {
      if (fields.map(i => i.slug).includes(f)) {
        fieldsToValidate[f] = user[f];
      }
    });
    return fieldsToValidate;
  }

  handleValueChange(field, value) {
    const { user } = this.state;
    this.setState({ user: { ...user, [field]: value } });
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

  handleSubmit() {
    const { fields, page } = this.props;
    const validationFunction =
      page === 'info' ? editDataErrorMessages : editPasswordErrorMessages;
    const validationErrors = validationFunction(
      this.getFieldsToValidate(),
      fields.filter(f => f.required).map(f => f.slug)
    );
    this.setState({ errors: validationErrors });
    if (isEmpty(validationErrors)) {
      this.handleEditUser();
    }
  }

  handleEditUser() {
    const { dispatch } = this.props;
    const { user } = this.state;
    const { user: prevUser } = this.props;
    const changedUserFields = user;
    Object.keys(user).forEach(k => {
      if (!user[k] || user[k] === prevUser[k]) delete changedUserFields[k];
    });
    editUser(changedUserFields).then(response => {
      if (!response.errors) {
        dispatch(setUser({ ...prevUser, ...changedUserFields }));
        if (changedUserFields.email) {
          dispatch(
            navigateTo(LOGIN, { notice: 'Please login with your new email' })
          );
        } else {
          dispatch(navigateTo(SETTINGS));
        }
      } else {
        this.setState({ errors: response.errors });
      }
    });
  }

  render() {
    const { user, errors } = this.state;
    return createElement(Component, {
      ...this.props,
      handleValueChange: this.handleValueChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
      user,
      errors
    });
  }
}

EditSettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.array,
  user: PropTypes.object,
  page: PropTypes.string
};

export default connect(mapStateToProps, null)(EditSettingsContainer);
