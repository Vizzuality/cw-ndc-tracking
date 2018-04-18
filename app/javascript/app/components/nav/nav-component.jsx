import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import cx from 'classnames';

import Icon from 'components/icon';
import NavLinks from 'components/nav-links';

import cwLogo from 'assets/cw-logo.svg';
import navBarTheme from 'styles/themes/nav-links/nav-links-nav-bar.scss';
import styles from './nav-styles.scss';

class Nav extends PureComponent {
  render() {
    const { routes, actions, className } = this.props;
    return (
      <div className={styles.navbarContainer}>
        <nav className={cx(styles.navbar, className)}>
          <div className={cx(styles.navMenu)}>
            <Link className={styles.logoContainer} to="/">
              <Icon className={styles.logo} icon={cwLogo} />
              <div className={styles.logoText}>NDC IMPLEMENTATION TRACKER</div>
            </Link>
            <NavLinks
              className={styles.navLinks}
              theme={navBarTheme}
              routes={routes}
            />
          </div>
          {actions && (
            <div className={cx(styles.navActions)}>
              {actions.map(action => (
                <div className={styles.link}>{action.name}</div>
              ))}
            </div>
          )}
        </nav>
      </div>
    );
  }
}

Nav.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.array.isRequired,
  actions: PropTypes.array
};

Nav.defaultProps = {
  routes: []
};

export default Nav;
