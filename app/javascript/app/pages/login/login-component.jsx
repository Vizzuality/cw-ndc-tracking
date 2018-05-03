import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/icon';
import Input from 'components/input';
import Button from 'components/button';
import cwLogo from 'assets/cw-logo.svg';

import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import styles from './login-styles.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      email: null
    };
  }

  render() {
    const { dispatch, handleLoginThunk } = this.props;
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
        <Input
          label="Password"
          inputType="password"
          placeholder="Please add your password"
          onChange={value => this.setState({ password: value })}
          onBlur={value => this.setState({ password: value })}
        />
        <Button
          onClick={() =>
            dispatch(handleLoginThunk(this.state.password, this.state.email))}
          theme={yellowButtonTheme}
        >
          Login
        </Button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  handleLoginThunk: PropTypes.func
};

export default Login;
