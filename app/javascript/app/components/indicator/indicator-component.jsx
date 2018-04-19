import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import infoIcon from 'assets/icons/info.svg';

import squareButtonTheme from 'styles/themes/button/button-square.scss';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';
import styles from './indicator-styles.scss';

const Indicator = ({ title, isTextArea, theme, children, handleClick }) => (
  <div
    className={cx(theme.wrapper, {
      [theme.textArea]: isTextArea
    })}
  >
    <p className={theme.indicatorTitle}>{title}</p>
    <div className="layout-grid-item">
      <div className={theme.childrenContainer}>{children}</div>
    </div>
    <div className={theme.buttonContainer}>
      <Button theme={squareButtonTheme} onClick={handleClick}>
        <Icon theme={blueIconTheme} icon={infoIcon} />
      </Button>
    </div>
  </div>
);

Indicator.propTypes = {
  children: PropTypes.node,
  isTextArea: PropTypes.bool,
  theme: PropTypes.object,
  title: PropTypes.string,
  handleClick: PropTypes.func.required
};

export default themr('Indicator', styles)(Indicator);
