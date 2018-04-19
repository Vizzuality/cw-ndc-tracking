import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import styles from './planning-target-styles.scss';

const Target = ({ title, theme, summary, children }) => (
  <div>
    <div className={theme.wrapper}>
      <div className={theme.infoContainer}>
        <p className={theme.name}>{title}</p>
        {summary && <p className={theme.summary}>{summary}</p>}
      </div>
      <div className={theme.buttonContainer}>{children}</div>
    </div>
  </div>
);

Target.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  title: PropTypes.string,
  summary: PropTypes.string
};

export default themr('Target', styles)(Target);
