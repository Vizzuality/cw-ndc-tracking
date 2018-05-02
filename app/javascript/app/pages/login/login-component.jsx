import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import Button from 'components/button';

import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';

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
      <div>
        <h1>please login</h1>
        <Input
          label="Email"
          inputType="text"
          placeholder="Please add your email"
          onChange={value => this.setState({ email: value })}
          onBlur={value => this.setState({ email: value })}
        />
        <Input
          label="Password"
          inputType="text"
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
