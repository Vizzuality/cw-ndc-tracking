import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import squareButtonTheme from 'styles/themes/button/button-square';
import blueIconTheme from 'styles/themes/icon/icon-blue';
import infoIcon from 'assets/icons/info.svg';
import cx from 'classnames';

import styles from './info-button-styles.scss';

const InfoButton = ({ className, text }) => (
  <div
    className={cx(styles.infoButton, className)}
    theme={squareButtonTheme}
    data-tip={text}
    role="tooltip"
  >
    <Icon theme={blueIconTheme} icon={infoIcon} />
  </div>
);

InfoButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  text: PropTypes.string.isRequired
};

export default InfoButton;
