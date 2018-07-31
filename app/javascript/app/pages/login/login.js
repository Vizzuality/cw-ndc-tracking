import { connect } from 'react-redux';
import { login } from 'services/login.service';
import { createElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { setUser, navigateToPlanning } from './login-actions';
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
      email: null
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
    login(password, email).then(data => {
      dispatch(setUser(data));
      localStorage.setItem('CWTTT', data.authentication_token);
      localStorage.setItem('user', data.email);
      dispatch(navigateToPlanning());
    });
  }

  render() {
    return createElement(Component, {
      ...this.props,
      handleSetValue: this.handleSetValue.bind(this),
      handleKeyUp: this.handleKeyUp,
      handleSubmit: this.handleSubmit
    });
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginContainer);
