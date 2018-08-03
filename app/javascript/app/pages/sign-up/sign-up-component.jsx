import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'redux-first-router-link';
import { LOGIN } from 'router';
import cx from 'classnames';
import Icon from 'components/icon';
import Input from 'components/input';
import Button from 'components/button';
import cwLogo from 'assets/cw-logo.svg';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import styles from './sign-up-styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class SignUp extends Component {
  render() {
    const { handleValueChange, handleSubmit, fields, errors } = this.props;
    return (
      <div className={cx(styles.wrapper, { [styles.withAlert]: alert })}>
        <div className={styles.logoContainer}>
          <Icon className={styles.logo} icon={cwLogo} />
          <div className={styles.logoText}>NDC IMPLEMENTATION TRACKER</div>
        </div>
        {fields.map(i => (
          <Input
            key={i.slug}
            label={i.label}
            inputType={i.type}
            placeholder={i.placeholder}
            errorMessages={
              errors && (errors[i.slug] || []).concat(errors.all || [])
            }
            onChange={value => handleValueChange(i.slug, value)}
            onBlur={value => handleValueChange(i.slug, value)}
          />
        ))}
        <Button onClick={handleSubmit} theme={yellowButtonTheme}>
          Sign Up
        </Button>
        <NavLink
          to={{
            type: LOGIN
          }}
          className={styles.link}
        >
          Login
        </NavLink>
      </div>
    );
  }
}

SignUp.propTypes = {
  handleValueChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.array,
  errors: PropTypes.object
};

export default SignUp;
