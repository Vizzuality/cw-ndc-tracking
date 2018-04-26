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
  hasRemoveAction,
  hasEditAction,
  infoText
}) => (
  <div className={theme.borderStyles}>
    <div className={theme.wrapper}>
      <div className={theme.infoContainer}>
        <div className={styles.nameWrapper}>
          <span className={theme.name}>{title}</span>
          {infoText && <InfoIcon text={infoText} className={styles.infoIcon} />}
        </div>
        {summary && <p className={theme.summary}>{summary}</p>}
      </div>
      <div className={theme.buttonContainer}>
        {hasEditAction && (
          <Button theme={squareButtonTheme} onClick={() => true}>
            <Icon theme={blueIconTheme} icon={editIcon} />
          </Button>
        )}
        {hasRemoveAction && (
          <Button theme={squareButtonTheme} onClick={() => true}>
            <Icon theme={blueIconTheme} icon={deleteIcon} />
          </Button>
        )}
      </div>
    </div>
  </div>
);

Target.propTypes = {
  hasEditAction: PropTypes.bool,
  hasRemoveAction: PropTypes.bool,
  theme: PropTypes.object,
  title: PropTypes.string,
  infoText: PropTypes.string,
  summary: PropTypes.string
};

Target.defaultProps = {
  hasRemoveAction: false,
  hasEditAction: false
};

export default themr('Target', styles)(Target);
