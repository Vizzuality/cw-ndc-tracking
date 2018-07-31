import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Button from 'components/button';
import Icon from 'components/icon';
import InfoIcon from 'components/info-icon';
import deleteIcon from 'assets/icons/delete.svg';
import editIcon from 'assets/icons/edit.svg';

import squareButtonTheme from 'styles/themes/button/button-square.scss';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';
import styles from './target-styles.scss';

const Target = ({
  title,
  theme,
  summary,
  editActionLink,
  handleRemoveAction,
  infoText,
  targetType,
  targetYear,
  summaryOnTooltip
}) => (
  <div className={theme.borderStyles}>
    <div className={theme.wrapper}>
      <div className={theme.infoContainer}>
        <div className={styles.nameWrapper}>
          <span className={theme.name}>{title}</span>
          {summary &&
          summaryOnTooltip && (
            <InfoIcon text={infoText} className={styles.infoIcon} />
          )}
        </div>
        {summary &&
        !summaryOnTooltip && <p className={theme.summary}>{summary}</p>}
        {targetType && (
          <div className={styles.metadataItem}>
            <p className={styles.metadataTitle}>Target type</p>
            <p className={styles.metadataValue}>{targetType}</p>
          </div>
        )}
        {targetYear && (
          <div className={styles.metadataItem}>
            <p className={styles.metadataTitle}>Target year</p>
            <p className={styles.metadataValue}>{targetYear}</p>
          </div>
        )}
      </div>
      <div className={theme.buttonContainer}>
        {editActionLink && (
          <Button theme={squareButtonTheme} link={editActionLink}>
            <Icon theme={blueIconTheme} icon={editIcon} />
          </Button>
        )}
        {handleRemoveAction && (
          <Button theme={squareButtonTheme} onClick={handleRemoveAction}>
            <Icon theme={blueIconTheme} icon={deleteIcon} />
          </Button>
        )}
      </div>
    </div>
  </div>
);

Target.propTypes = {
  editActionLink: PropTypes.string,
  handleRemoveAction: PropTypes.func,
  theme: PropTypes.object,
  title: PropTypes.string,
  infoText: PropTypes.string,
  summary: PropTypes.string,
  targetType: PropTypes.string,
  targetYear: PropTypes.string,
  summaryOnTooltip: PropTypes.bool
};

Target.defaultProps = {
  summaryOnTooltip: false
};

export default themr('Target', styles)(Target);
