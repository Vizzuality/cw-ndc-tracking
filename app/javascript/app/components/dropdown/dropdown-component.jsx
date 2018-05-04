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
      wrapperClassName,
      className,
      disabled,
      handleChange
    } = this.props;
    return (
      <div className={cx(styles.dropdownWrapper, wrapperClassName)}>
        {label && <span className={styles.label}>{label}</span>}
        <div className={theme.dropdown}>
          <SimpleSelect
            ref={el => {
              this.selectorElement = el;
            }}
            className={cx(className, disabled)}
            renderToggleButton={() => <Icon icon={arrow} />}
            onValueChange={handleChange}
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
  theme: PropTypes.object,
  hasSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  selectorRef: PropTypes.func,
  handleChange: PropTypes.func.isRequired
};

export default themr('Dropdown', styles)(Dropdown);
