import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { signUp } from 'services/login.service';
import errorMessages from 'utils/user-validation';
import isEmpty from 'lodash/isEmpty';
import { navigateTo, LOGIN } from 'router';
import Component from './sign-up-component';

const mapStateToProps = () => {
  const fields = [
    {
      label: 'First name',
      slug: 'first_name',
      type: 'text',
      placeholder: 'Your name'
    },
    {
      label: 'Last name',
      slug: 'last_name',
      type: 'text',
      placeholder: 'Your last name'
    },
    {
      label: 'Email',
      slug: 'email',
      type: 'email',
      placeholder: 'Edit your email'
    },
    {
      label: 'Password',
      slug: 'password',
      type: 'password',
      placeholder: 'Add a new password'
    },
    {
      label: 'Confirm Password',
      slug: 'password_confirmation',
      type: 'password',
      placeholder: 'Confirm your password'
    }
  ];

  return { fields };
};

class SignUpContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors: null
    };
  }

  handleValueChange(field, value) {
    const { user } = this.state;
    this.setState({ user: { ...user, [field]: value } });
  }

  handleSignUpThunk() {
    const { user } = this.state;
    const { dispatch } = this.props;
    signUp(user).then(response => {
      if (!response.errors) {
        dispatch(
          navigateTo(LOGIN, {
            notice: 'Welcome! You have signed up successfully'
          })
        );
      } else {
        this.setState({
          errors: response.errors
        });
      }
    });
  }

  handleSubmit() {
    const { user } = this.state;
    const validationErrors = errorMessages(user);
    this.setState({ errors: validationErrors });
    if (isEmpty(validationErrors)) {
      this.handleSignUpThunk();
    }
  }

  render() {
    const { errors } = this.state;
    return createElement(Component, {
      handleSubmit: this.handleSubmit.bind(this),
      handleValueChange: this.handleValueChange.bind(this),
      errors,
      ...this.props
    });
  }
}

SignUpContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SignUpContainer);
