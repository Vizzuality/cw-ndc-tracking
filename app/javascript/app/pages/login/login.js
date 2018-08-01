import { connect } from 'react-redux';
import { login } from 'services/login.service';
import { createElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { navigateTo, PLANNING } from 'app/router';
import { setUser } from './login-actions';
import Component from './login-component';

const mapStateToProps = state => ({
  notice:
    state.location && state.location.payload && state.location.payload.notice
});

class LoginContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      password: null,
      email: null,
      errorMessage: ''
    };
  }

  handleSubmit = () => {
    const { password, email } = this.state;
    this.handleLoginThunk(password, email);
  };

  handleKeyUp = e => {
    const { password, email } = this.state;
    if (e.key === 'Enter' && password && email) this.handleSubmit();
  };

  handleSetValue(field, value) {
    this.setState({ [field]: value });
  }

  handleLoginThunk() {
    const { dispatch } = this.props;
    const { password, email } = this.state;
    login(password, email).then(response => {
      if (!response.error) {
        dispatch(setUser(response));
        localStorage.setItem('CWTTT', response.authentication_token);
        localStorage.setItem('user', response.email);
        dispatch(navigateTo(PLANNING));
      } else {
        this.setState({ errorMessage: response.error });
      }
    });
  }

  render() {
    const { errorMessage } = this.state;
    return createElement(Component, {
      ...this.props,
      handleSetValue: this.handleSetValue.bind(this),
      handleKeyUp: this.handleKeyUp,
      handleSubmit: this.handleSubmit,
      errorMessage
    });
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
