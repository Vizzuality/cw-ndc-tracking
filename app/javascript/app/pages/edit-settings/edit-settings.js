import { connect } from 'react-redux';
import { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import { editUser } from 'services/user.service';
import { setUser } from 'pages/login/login-reducers';
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
        label: "New password (Leave it blank if you don't want to change it)",
        slug: 'password',
        type: 'password',
        placeholder: 'Add a new password'
      },
      {
        label:
          'Confirm Password (We need your current password to confirm your changes)',
        slug: 'password_confirmation',
        type: 'password',
        placeholder: 'Confirm your new password'
      }
    ]
  };
  return {
    user,
    fields: page ? fields[page] : [],
    page
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
    editUser(user).then(function (data) {
      dispatch(setUser(data));
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
