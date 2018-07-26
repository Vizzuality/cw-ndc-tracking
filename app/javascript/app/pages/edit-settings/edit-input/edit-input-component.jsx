import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './edit-input-styles.scss';

const EditInput = ({ name, description, children }) => (
  <div className={styles.borderWrapper}>
    <div
      className={cx(styles.inputWrapper, {
        [styles.withDescription]: description
      })}
    >
      <div className={styles.name}>{name}</div>
      {description && <div className={styles.description}>{description}</div>}
      {children}
    </div>
  </div>
);

EditInput.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default EditInput;
