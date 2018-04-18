import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Input from 'components/input';
import Button from 'components/button';

import styles from './input-styles.scss';

const Item = ({ title, inputType, hasInput, theme, inputUnit }) => (
  <div className={theme.wrapper}>
    <p>{title}</p>
    {hasInput && inputType && <Input inputType={inputType} unit={inputUnit} />}
    <Button />
  </div>
);

Item.propTypes = {
  title: PropTypes.string,
  inputType: PropTypes.oneOf(['textarea', 'number', 'text']),
  hasInput: PropTypes.bool,
  inputUnit: PropTypes.string,
  theme: PropTypes.object
};

export default themr('Item', styles)(Item);
