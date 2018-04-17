import React from 'react';
import PropTypes from 'prop-types';

import styles from './progress-bar-styles.scss';

const ProgressBar = ({ progress }) => (
  <div className={styles.progress}>
    <div
      className={styles.progressBar}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: `${progress}%` }}
    />
  </div>
);

ProgressBar.propTypes = {
  progress: PropTypes.number
};

export default ProgressBar;
