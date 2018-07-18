import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import Button from 'components/button';
import Icon from 'components/icon';
import ProgressBar from 'components/progress-bar';
import editIcon from 'assets/icons/edit.svg';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import squareButtonTheme from 'styles/themes/button/button-square.scss';
import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';
import styles from './tracking-target-styles.scss';

const Target = ({
  title,
  theme,
  reportedPercentage,
  updatedAt,
  editActionLink
}) => (
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
          <span
            className={theme.updateText}
          >{`Last update ${distanceInWordsToNow(
              new Date(updatedAt)
            )} ago`}</span>
          {editActionLink && (
            <Button
              className={theme.editButton}
              theme={squareButtonTheme}
              link={editActionLink}
            >
              <Icon theme={blueIconTheme} icon={editIcon} />
            </Button>
          )}
        </div>
      ) : (
        <Fragment>
          <ProgressBar progress={reportedPercentage} />
          <Button theme={yellowButtonTheme} link={editActionLink}>
            {reportedPercentage > 0 && reportedPercentage < 100 ? (
              'Continue tracking'
            ) : (
              'Report'
            )}
          </Button>
        </Fragment>
      )}
    </div>
  </div>
);

Target.propTypes = {
  reportedPercentage: PropTypes.number,
  updatedAt: PropTypes.string,
  editActionLink: PropTypes.string,
  theme: PropTypes.object,
  title: PropTypes.string
};

export default themr('Target', styles)(Target);
