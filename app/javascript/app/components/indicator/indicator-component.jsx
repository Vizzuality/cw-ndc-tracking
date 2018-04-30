import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import InfoIcon from 'components/info-icon';
import Input from 'components/input';
import styles from './indicator-styles.scss';

const Indicator = ({ title, values, theme, infoText, handleBlur }) => (
  <div
    className={cx(theme.borderStyles, {
      [theme.notApplicable]: values.some(v => v.value === 'n/a')
    })}
  >
    <div
      className={cx(theme.wrapper, {
        [theme.textArea]: values.some(v => v.type === 'textarea')
      })}
    >
      <div className={theme.nameWrapper}>
        <p className={theme.indicatorTitle}>{title}</p>
        {infoText && <InfoIcon text={infoText} className={styles.infoIcon} />}
      </div>
      <div className="layout-grid-item">
        <div className={theme.childrenContainer}>
          {values.map(value => (
            <Input
              key={value.label}
              value={value.value}
              inputType={value.type}
              label={value.label}
              unit={value.unit}
              onBlur={handleBlur}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

Indicator.propTypes = {
  values: PropTypes.array,
  theme: PropTypes.object,
  title: PropTypes.string,
  handleBlur: PropTypes.func,
  infoText: PropTypes.string
};

export default themr('Indicator', styles)(Indicator);
