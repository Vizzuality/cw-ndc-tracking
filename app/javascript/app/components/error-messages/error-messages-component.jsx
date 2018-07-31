import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './error-messages-styles.scss';

class ErrorMessages extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { errors, className } = this.props;
    return (
      errors.length > 0 && (
        <div className={cx(styles.alertContainer, className)}>
          {errors.map(errorMessage => (
            <div className={cx(styles.alert)} key={`${errorMessage}`}>
              {errorMessage}
            </div>
          ))}
        </div>
      )
    );
  }
}

ErrorMessages.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string
};

export default ErrorMessages;
