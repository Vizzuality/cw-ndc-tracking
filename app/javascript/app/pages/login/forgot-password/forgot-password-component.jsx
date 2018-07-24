import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/icon';
import Input from 'components/input';
import Button from 'components/button';
import cwLogo from 'assets/cw-logo.svg';
import { NavLink } from 'redux-first-router-link';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import { LOGIN } from 'router';
import styles from '../login-styles.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null
    };
  }

  render() {
    const { dispatch, handleForgotPasswordClick } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Icon className={styles.logo} icon={cwLogo} />
          <div className={styles.logoText}>NDC IMPLEMENTATION TRACKER</div>
        </div>
        <Input
          label="Email"
          inputType="text"
          placeholder="Please add your email"
          onChange={value => this.setState({ email: value })}
          onBlur={value => this.setState({ email: value })}
        />
        <Button
          onClick={() => dispatch(handleForgotPasswordClick(this.state.email))}
          theme={yellowButtonTheme}
        >
          Send me reset password instructions
        </Button>
        <NavLink
          to={{
            type: LOGIN
          }}
          className={styles.link}
        >
          Log in
        </NavLink>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  handleForgotPasswordClick: PropTypes.func
};

export default Login;
