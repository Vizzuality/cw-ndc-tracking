import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import InfoIcon from 'components/info-icon';
import styles from './indicator-styles.scss';

const Indicator = ({ title, isTextArea, theme, children, infoText }) => (
  <div
    className={cx(theme.wrapper, {
      [theme.textArea]: isTextArea
    })}
  >
    <div className={theme.nameWrapper}>
      <p className={theme.indicatorTitle}>{title}</p>
      {infoText && <InfoIcon text={infoText} className={styles.infoIcon} />}
    </div>
    <div className="layout-grid-item">
      <div className={theme.childrenContainer}>{children}</div>
    </div>
  </div>
);

Indicator.propTypes = {
  children: PropTypes.node,
  isTextArea: PropTypes.bool,
  theme: PropTypes.object,
  title: PropTypes.string,
  infoText: PropTypes.string
};

export default themr('Indicator', styles)(Indicator);
