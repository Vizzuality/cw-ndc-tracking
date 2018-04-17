import React, { PureComponent } from 'react';
import { ReactSelectize, SimpleSelect } from 'react-selectize'; // eslint-disable-line
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import { themr } from 'react-css-themr';
import cx from 'classnames';

import arrow from 'assets/icons/dropdown-arrow.svg';

import theme from 'styles/themes/dropdown/react-selectize.scss';
import styles from './dropdown-styles.scss';

class Dropdown extends PureComponent {
  componentDidUpdate() {
    this.selectorElement.highlightFirstSelectableOption();
  }
  render() {
    const {
      label,
      white,
      transparent,
      plain,
      dark,
      blueBorder,
      wrapperClassName,
      className,
      disabled,
      colorDot
    } = this.props;
    return (
      <div
        className={cx(
          styles.dropdownWrapper,
          { [styles.flex]: colorDot },
          wrapperClassName
        )}
      >
        {colorDot && (
          <span className={styles.dot} style={{ backgroundColor: colorDot }} />
        )}
        {label && <span className={styles.label}>{label}</span>}
        <div
          className={cx(
            theme.dropdown,
            transparent ? theme.transparent : '',
            white ? theme.white : '',
            plain ? theme.plain : '',
            dark ? theme.dark : '',
            blueBorder ? theme.blueBorder : ''
          )}
        >
          <SimpleSelect
            ref={el => {
              this.selectorElement = el;
            }}
            className={cx(className, disabled, { [styles.withDot]: colorDot })}
            renderToggleButton={() => <Icon icon={arrow} />}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  label: PropTypes.string,
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  transparent: PropTypes.bool,
  white: PropTypes.bool,
  plain: PropTypes.bool,
  dark: PropTypes.bool,
  theme: PropTypes.object,
  hasSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  blueBorder: PropTypes.bool,
  selectorRef: PropTypes.func,
  colorDot: PropTypes.string
};

export default themr('Dropdown', styles)(Dropdown);
