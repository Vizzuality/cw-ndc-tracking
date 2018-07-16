import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from 'components/nav-links';
import BackButton from 'components/button/back-button';
import cx from 'classnames';
import layout from 'styles/layout';
import styles from './header-styles.scss';

const Header = ({ title, actions, navSections, backButton }) => (
  <div className={cx(styles.header, layout.noPrint)}>
    <div
      className={cx(styles.headerLayout, { [styles.withActions]: !!actions })}
    >
      <div className={styles.titleContainer}>
        {backButton && <BackButton className={styles.backButton} />}
        <div className={styles.title}>{title}</div>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
    {navSections && (
      <div className={styles.navLinksLayout}>
        <NavLinks className={styles.navLinks} navSections={navSections} />
      </div>
    )}
  </div>
);

Header.propTypes = {
  backButton: PropTypes.bool,
  navSections: PropTypes.array,
  title: PropTypes.string,
  actions: PropTypes.node
};

export default Header;
