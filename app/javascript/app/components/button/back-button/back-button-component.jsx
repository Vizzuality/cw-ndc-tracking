import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import squareButtonTheme from 'styles/themes/button/button-square';
import blueIconTheme from 'styles/themes/icon/icon-blue';
import backIcon from 'assets/icons/back.svg';
import { back } from 'redux-first-router';

const BackButton = ({ className }) => (
  <Button
    className={className}
    theme={squareButtonTheme}
    onClick={() => back()}
  >
    <Icon theme={blueIconTheme} icon={backIcon} />
  </Button>
);

BackButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default BackButton;
