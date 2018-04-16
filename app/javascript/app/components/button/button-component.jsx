import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'redux-first-router-link';
import { themr } from 'react-css-themr';

import styles from './button-styles.scss';

const Button = props => {
  const { link, href, children, className, disabled, onClick, theme } = props;
  const classNames = cx(className, theme.button, {
    [theme.disabled]: !onClick && !link && !href
  });
  if (href) {
    return (
      <a className={classNames} href={href}>
        {children}
      </a>
    );
  }
  return link ? (
    <Link className={classNames} to={link} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button
      title={disabled ? 'Coming soon' : ''}
      disabled={disabled}
      className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  link: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.object
};

Button.defaultProps = {
  noSpace: false,
  disabled: false,
  href: null
};

export default themr('Button', styles)(Button);
