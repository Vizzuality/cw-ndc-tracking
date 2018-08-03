import React from 'react';
import PropTypes from 'prop-types';
import styles from './edit-input-styles.scss';

const EditInput = ({ name, children }) => (
  <div className={styles.borderWrapper}>
    <div className={styles.inputWrapper}>
      <div className={styles.name}>{name}</div>
      {children}
    </div>
  </div>
);

EditInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default EditInput;
