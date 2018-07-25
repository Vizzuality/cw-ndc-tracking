import React, { PureComponent } from 'react';
import Header from 'components/header';
import Input from 'components/input';
import Button from 'components/button';
import PropTypes from 'prop-types';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import styles from './settings-styles.scss';

class Settings extends PureComponent {
  render() {
    const { handleSubmit, handleValueChange } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Settings" />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Edit User</h2>
          <Input
            label="Name"
            inputType="text"
            placeholder="Edit your name"
            onChange={value => handleValueChange('name', value)}
            onBlur={value => handleValueChange('name', value)}
          />
          <Input
            label="Email"
            inputType="text"
            placeholder="Edit your email"
            onChange={value => handleValueChange('email', value)}
            onBlur={value => handleValueChange('email', value)}
          />
          <Input
            label="Current password"
            inputType="password"
            placeholder="Your current password"
            onChange={value => handleValueChange('current_password', value)}
            onBlur={value => handleValueChange('current_password', value)}
          />
          <Input
            label="New password (Leave it blank if you don't want to change it)"
            inputType="password"
            placeholder="Add a new password"
            onChange={value => handleValueChange('password', value)}
            onBlur={value => handleValueChange('password', value)}
          />
          <Input
            label="Confirm Password (We need your current password to confirm your changes)"
            inputType="password"
            placeholder="Confirm your new password"
            onChange={value =>
              handleValueChange('password_confirmation', value)}
            onBlur={value => handleValueChange('password_confirmation', value)}
          />
          <Button onClick={handleSubmit} theme={yellowButtonTheme}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleValueChange: PropTypes.func.isRequired
};

export default Settings;
