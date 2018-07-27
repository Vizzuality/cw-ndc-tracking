import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import Input from 'components/input';
import Button from 'components/button';
import cwLogo from 'assets/cw-logo.svg';
import { NavLink } from 'redux-first-router-link';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import { FORGOT_PASSWORD } from 'router';
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
    const { notice, handleKeyUp, handleSubmit, handleSetValue } = this.props;
    return (
      <div className={styles.wrapper}>
        {notice && <div className={styles.notice}>{notice}</div>}
        <div className={styles.logoContainer}>
          <Icon className={styles.logo} icon={cwLogo} />
          <div className={styles.logoText}>NDC IMPLEMENTATION TRACKER</div>
        </div>
        <Input
          label="Email"
          inputType="text"
          placeholder="Please add your email"
          onChange={value => handleSetValue('email', value)}
          onBlur={value => handleSetValue('email', value)}
          handleKeyUp={handleKeyUp}
        />
        <Input
          label="Password"
          inputType="password"
          placeholder="Please add your password"
          onChange={value => handleSetValue('password', value)}
          onBlur={value => handleSetValue('password', value)}
          handleKeyUp={handleKeyUp}
        />
        <Button onClick={handleSubmit} theme={yellowButtonTheme}>
          Login
        </Button>
        <NavLink
          to={{
            type: FORGOT_PASSWORD
          }}
          className={styles.link}
        >
          Forgot your password?
        </NavLink>
      </div>
    );
  }
}

Login.propTypes = {
  notice: PropTypes.string,
  handleKeyUp: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSetValue: PropTypes.func.isRequired
};

export default Login;
