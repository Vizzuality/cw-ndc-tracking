import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from 'components/nav-links';
import BackButton from 'components/button/back-button';
import cx from 'classnames';
import styles from './header-styles.scss';

const Header = ({ title, actions, routes, backButton }) => (
  <div className={styles.header}>
    <div
      className={cx(styles.headerLayout, { [styles.withActions]: !!actions })}
    >
      <div className={styles.titleContainer}>
        {backButton && <BackButton className={styles.backButton} />}
        <div className={styles.title}>{title}</div>
      </div>
      {actions}
    </div>
    {routes && (
      <div className={styles.navLinksLayout}>
        <NavLinks className={styles.navLinks} routes={routes} />
      </div>
    )}
  </div>
);

Header.propTypes = {
  backButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  routes: PropTypes.array,
  actions: PropTypes.node
};

export default Header;
