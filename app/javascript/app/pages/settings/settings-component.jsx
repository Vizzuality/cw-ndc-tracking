import React, { PureComponent } from 'react';
import Header from 'components/header';
import { PropTypes } from 'prop-types';
import SettingsItem from './settings-item';
import styles from './settings-styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Settings extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Settings" className={styles.header} />
        <div className={styles.wrapper}>
          <SettingsItem
            title={'Personal info'}
            editActionLink={'/settings/info'}
          >
            {user && (
              <div>
                <div>{`${user.first_name} ${user.last_name}`}</div>
                <div>{user.email}</div>
              </div>
            )}
          </SettingsItem>
          <SettingsItem
            title={'Password'}
            editActionLink={'/settings/password'}
          />
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  user: PropTypes.object
};

export default Settings;
