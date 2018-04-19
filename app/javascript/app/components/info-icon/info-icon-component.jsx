import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import Icon from 'components/icon';
import infoIcon from 'assets/icons/info.svg';

import grayIconTheme from 'styles/themes/icon/icon-gray.scss';
import styles from './info-icon-styles.scss';

const InfoIcon = ({ text, className, theme }) => (
  <span className={cx(className, theme.icon)} data-tip={text} role="tooltip">
    <Icon theme={grayIconTheme} icon={infoIcon} />
  </span>
);

InfoIcon.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.object
};

export default themr('InfoIcon', styles)(InfoIcon);
