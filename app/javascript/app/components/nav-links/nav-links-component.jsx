import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'redux-first-router-link';
import cx from 'classnames';
import { themr } from 'react-css-themr';

import styles from './nav-links-styles.scss';

class NavLinks extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { navSections, className, theme } = this.props;
    return (
      <div className={cx(className, theme.nav)}>
        {navSections &&
          navSections.map(section => (
            <NavLink
              key={section.title}
              to={`/${section.slug}`}
              className={theme.link}
              activeClassName={styles.active}
              isActive={match => match && match.path === `/${section.slug}`}
            >
              {section.title}
            </NavLink>
          ))}
      </div>
    );
  }
}

NavLinks.propTypes = {
  className: PropTypes.string,
  navSections: PropTypes.array.isRequired,
  theme: PropTypes.object
};

NavLinks.defaultProps = {
  navSections: []
};

export default themr('NavLinks', styles)(NavLinks);
