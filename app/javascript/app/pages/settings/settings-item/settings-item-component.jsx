import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';
import squareButtonTheme from 'styles/themes/button/button-square.scss';
import editIcon from 'assets/icons/edit.svg';
import styles from './settings-item-styles.scss';

class SettingsItem extends PureComponent {
  render() {
    const { editActionLink, title, children } = this.props;
    return (
      <div className={styles.borderWrapper}>
        <div className={styles.item}>
          <div className={styles.nameWrapper}>
            <h3 className={styles.name}>{title}</h3>
            <div className={styles.description}>{children}</div>
          </div>
          <div className={styles.buttonContainer}>
            <Button theme={squareButtonTheme} link={editActionLink}>
              <Icon theme={blueIconTheme} icon={editIcon} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

SettingsItem.propTypes = {
  title: PropTypes.string,
  editActionLink: PropTypes.string,
  children: PropTypes.node
};

export default SettingsItem;
