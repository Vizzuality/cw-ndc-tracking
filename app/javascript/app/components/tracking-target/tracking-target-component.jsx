import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Button from 'components/button';
import Icon from 'components/icon';
import ProgressBar from 'components/progress-bar';
import deleteIcon from 'assets/icons/info.svg';

import squareButtonTheme from 'styles/themes/button/button-square.scss';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';
import styles from './tracking-target-styles.scss';

const Target = ({ title, theme, summary, reportedPercentage }) => (
  <div className={theme.wrapper}>
    <div className={theme.infoContainer}>
      <p className={theme.name}>{title}</p>
      {summary && <p className={theme.summary}>{summary}</p>}
    </div>
    {reportedPercentage === 100 ? (
      <div className={theme.buttonContainer}>
        <Button theme={squareButtonTheme} onClick={() => true}>
          <Icon theme={blueIconTheme} icon={deleteIcon} />
        </Button>
      </div>
    ) : (
      <Fragment>
        <ProgressBar progress={reportedPercentage} />
        <Button theme={yellowButtonTheme} onClick={() => true}>
          Report
        </Button>
      </Fragment>
    )}
  </div>
);

Target.propTypes = {
  reportedPercentage: PropTypes.number,
  theme: PropTypes.object,
  title: PropTypes.string,
  summary: PropTypes.string
};

export default themr('Target', styles)(Target);
