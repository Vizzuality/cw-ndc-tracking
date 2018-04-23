import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from 'components/icon';
import NavLinks from 'components/nav-links';

import cwLogo from 'assets/cw-logo.svg';
import navBarTheme from 'styles/themes/nav-links/nav-links-nav-bar.scss';
import styles from './nav-styles.scss';

class Nav extends PureComponent {
  render() {
    const { routes, actions, className, navSections } = this.props;
    return (
      <div className={styles.navbarContainer}>
        <nav className={cx(styles.navbar, className)}>
          <div className={cx(styles.navMenu)}>
            <div className={styles.logoContainer}>
              <Icon className={styles.logo} icon={cwLogo} />
              <div className={styles.logoText}>NDC IMPLEMENTATION TRACKER</div>
            </div>
            <NavLinks
              className={styles.navLinks}
              theme={navBarTheme}
              routes={routes}
              navSections={navSections}
            />
          </div>
          {actions && (
            <div className={cx(styles.navActions)}>
              {actions.map(action => (
                <div key={action.name} className={styles.link}>
                  {action.name}
                </div>
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
  navSections: PropTypes.array,
  actions: PropTypes.array
};

Nav.defaultProps = {
  routes: []
};

export default Nav;
