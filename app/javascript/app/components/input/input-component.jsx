import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import cx from 'classnames';
import { themr } from 'react-css-themr';

import styles from './input-styles.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentDidMount() {
    if (this.props.autofocus) {
      this.inputRef.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  componentDidUpdate(prevProps) {
    const { autofocus } = this.props;
    if (autofocus && autofocus !== prevProps.autofocus) {
      this.inputRef.focus();
    }
  }

  handleChange = value => {
    this.setState({ value });
    this.debouncedChange();
  };

  debouncedChange = debounce(() => {
    const { onChange } = this.props;
    if (onChange) {
      this.props.onChange(this.state.value);
    }
  }, 300);

  render() {
    const { value } = this.state;
    const {
      theme,
      className,
      handleKeyUp,
      notApplicable,
      disabled,
      inputType,
      placeholder,
      label,
      unit,
      onBlur
    } = this.props;
    const inputProps = {
      ref: el => {
        this.inputRef = el;
      },
      type: inputType === 'number' ? 'number' : 'text',
      className: cx(styles.input, className, theme.input, {
        [theme.textArea]: inputType === 'textarea',
        [theme.notApplicable]: notApplicable && value === '',
        [theme.disabled]: disabled
      }),
      onChange: e => this.handleChange(e.target.value),
      onBlur: () => onBlur(value),
      value,
      onKeyUp: handleKeyUp,
      placeholder: notApplicable ? 'n/a' : placeholder,
      disabled
    };
    const labelProp = label ? { id: label } : {};
    const input =
      inputType === 'textarea' ? (
        <textarea {...inputProps} {...labelProp} />
      ) : (
        <input {...inputProps} {...labelProp} />
      );
    return (
      <Fragment>
        {label ? (
          <label htmlFor={label}>
            <div className={theme.label}>{`${label}${unit
              ? ` (${unit})`
              : ''}`}</div>
            {input}
          </label>
        ) : (
          input
        )}
      </Fragment>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  autofocus: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.object,
  handleKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  inputType: PropTypes.oneOf(['textarea', 'number', 'text']),
  disabled: PropTypes.bool,
  notApplicable: PropTypes.bool,
  label: PropTypes.string,
  unit: PropTypes.string
};

Input.defaultProps = {
  value: ''
};

export default themr('Input', styles)(Input);
