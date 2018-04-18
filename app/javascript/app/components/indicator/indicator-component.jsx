import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import Input from 'components/input';
import Dropdown from 'components/dropdown';
import Button from 'components/button';
import Icon from 'components/icon';
import deleteIcon from 'assets/icons/info.svg';

import squareButtonTheme from 'styles/themes/button/button-square.scss';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';
import styles from './indicator-styles.scss';

const Indicator = ({
  title,
  fieldType,
  theme,
  inputUnit,
  label,
  dropdownOptions
}) => (
  <div
    className={cx(theme.wrapper, {
      [theme.textArea]: fieldType === 'textarea'
    })}
  >
    <p className={theme.indicatorTitle}>{title}</p>
    {fieldType === 'dropdown' ? (
      dropdownOptions && (
        <Dropdown options={dropdownOptions} unit={inputUnit} label={label} />
      )
    ) : (
      <Input inputType={fieldType} unit={inputUnit} label={label} />
    )}
    <Button theme={squareButtonTheme} onClick={() => true}>
      <Icon theme={blueIconTheme} icon={deleteIcon} />
    </Button>
  </div>
);

Indicator.propTypes = {
  title: PropTypes.string,
  fieldType: PropTypes.string,
  inputUnit: PropTypes.string,
  label: PropTypes.string,
  dropdownOptions: PropTypes.array,
  theme: PropTypes.object
};

export default themr('Indicator', styles)(Indicator);
