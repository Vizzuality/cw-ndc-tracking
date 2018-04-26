import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import Button from 'components/button';
import Icon from 'components/icon';
import ProgressBar from 'components/progress-bar';
import editIcon from 'assets/icons/edit.svg';

import squareButtonTheme from 'styles/themes/button/button-square.scss';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';
import styles from './tracking-target-styles.scss';

const Target = ({ title, theme, reportedPercentage }) => (
  <div className={theme.borderStyles}>
    <div
      className={cx(theme.wrapper, {
        [theme.completed]: reportedPercentage === 100,
        [theme.uncompleted]: reportedPercentage !== 100
      })}
    >
      <div className={theme.infoContainer}>
        <p className={theme.name}>{title}</p>
      </div>
      {reportedPercentage === 100 ? (
        <div className={theme.buttonContainer}>
          <span className={theme.updateText}>Last update on Jan 24th</span>
          <Button
            theme={squareButtonTheme}
            onClick={() => true}
            className={theme.editButton}
          >
            <Icon theme={blueIconTheme} icon={editIcon} />
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
  </div>
);

Target.propTypes = {
  reportedPercentage: PropTypes.number,
  theme: PropTypes.object,
  title: PropTypes.string
};

export default themr('Target', styles)(Target);
