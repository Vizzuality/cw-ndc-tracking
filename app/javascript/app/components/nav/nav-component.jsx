import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import cx from 'classnames';

import Icon from 'components/icon';

import cwLogo from 'assets/cw-logo.svg';
import styles from './nav-styles.scss';

class Nav extends PureComponent {
  render() {
    const { routes, className } = this.props;
    return (
      <nav className={cx(styles.navbar, className)}>
        <Link className={styles.link} to="/">
          <Icon className={styles.logo} icon={cwLogo} />
        </Link>
        {routes.map(route => (
          <Link className={styles.link} key={route.label} to={route.path}>
            {route.label}
          </Link>
        ))}
      </nav>
    );
  }
}

Nav.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.array.isRequired
};

Nav.defaultProps = {
  routes: []
};

export default Nav;
