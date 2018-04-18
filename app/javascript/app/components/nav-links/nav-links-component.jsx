import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'redux-first-router-link';
import cx from 'classnames';
import { themr } from 'react-css-themr';

import styles from './nav-links-styles.scss';

class NavLinks extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { routes, className, theme } = this.props;
    return (
      <div className={cx(className, theme.nav)}>
        {routes.map(route => (
          <NavLink
            key={route.label}
            to={route.path}
            className={theme.link}
            activeClassName={styles.active}
            isActive={match => match && match.path === route.path}
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    );
  }
}

NavLinks.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.array.isRequired,
  theme: PropTypes.object
};

NavLinks.defaultProps = {
  routes: []
};

export default themr('NavLinks', styles)(NavLinks);
