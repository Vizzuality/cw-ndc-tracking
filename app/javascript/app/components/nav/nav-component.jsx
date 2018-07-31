import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from 'components/icon';
import NavLinks from 'components/nav-links';

import cwLogo from 'assets/cw-logo.svg';
import navBarTheme from 'styles/themes/nav-links/nav-links-nav-bar.scss';
import layout from 'styles/layout';
import styles from './nav-styles.scss';
import printStyles from './nav-print-styles.scss';

class Nav extends PureComponent {
  render() {
    const { actions, className, navSections, hideNav } = this.props;
    return hideNav ? null : (
      <div className={cx(styles.navbarContainer, printStyles.navbarContainer)}>
        <nav className={cx(styles.navbar, printStyles.navbar, className)}>
          <div className={cx(styles.navMenu)}>
            <div className={styles.logoContainer}>
              <Icon className={styles.logo} icon={cwLogo} />
              <div className={styles.logoText}>NDC IMPLEMENTATION TRACKER</div>
            </div>
            <NavLinks
              className={cx(styles.navLinks, layout.noPrint)}
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
  hideNav: PropTypes.bool,
  actions: PropTypes.array
};

Nav.defaultProps = {
  routes: []
};

export default Nav;
