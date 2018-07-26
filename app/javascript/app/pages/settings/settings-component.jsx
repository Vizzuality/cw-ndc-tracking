import React, { PureComponent } from 'react';
import Header from 'components/header';
import SettingsItem from './settings-item';
import styles from './settings-styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Settings extends PureComponent {
  render() {
    return (
      <div className={styles.page}>
        <Header title="Settings" className={styles.header} />
        <div className={styles.wrapper}>
          <SettingsItem
            title={'Personal info'}
            editActionLink={'/settings/info'}
          >
            <div>User Name</div>
          </SettingsItem>
          <SettingsItem
            title={'Password'}
            editActionLink={'/settings/password'}
          >
            <div>******</div>
          </SettingsItem>
        </div>
      </div>
    );
  }
}

export default Settings;
