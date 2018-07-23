import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LOGIN } from 'router';

import Icon from 'components/icon';
import NavLinks from 'components/nav-links';

import cwLogo from 'assets/cw-logo.svg';
import navBarTheme from 'styles/themes/nav-links/nav-links-nav-bar.scss';
import styles from './nav-styles.scss';

class Nav extends PureComponent {
  render() {
    const { actions, className, navSections, location } = this.props;
    if (location && location.type === LOGIN) return null;
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
              navSections={navSections}
            />
          </div>
          {actions && (
            <div className={cx(styles.navActions)}>
              {actions.map(action => (
                <button
                  key={action.name}
                  onClick={action.onClick}
                  className={styles.link}
                >
                  {action.name}
                </button>
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
  navSections: PropTypes.array.isRequired,
  location: PropTypes.object,
  actions: PropTypes.array
};

Nav.defaultProps = {
  routes: []
};

export default Nav;
