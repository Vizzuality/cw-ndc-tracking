import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import transparentButtonTheme from 'styles/themes/button/button-transparent.scss';
import { back } from 'redux-first-router';
import styles from './action-footer-styles.scss';

class ActionFooter extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onActionClick, actionTitle, disabled } = this.props;
    return (
      <div className={styles.actionFooterWrapper}>
        <div className={styles.actionFooter}>
          <Button
            onClick={onActionClick}
            theme={yellowButtonTheme}
            disabled={disabled}
          >
            {actionTitle}
          </Button>
          <Button onClick={() => back()} theme={transparentButtonTheme}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

ActionFooter.defaultProps = {
  actionTitle: 'Save'
};

ActionFooter.propTypes = {
  onActionClick: PropTypes.func.isRequired,
  actionTitle: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default ActionFooter;
