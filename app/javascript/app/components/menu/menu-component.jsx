import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from 'components/icon';
import checkIcon from 'assets/icons/check.svg';
import arrow from 'assets/icons/arrow-down-tiny.svg';
import { NavLink } from 'redux-first-router-link';
import includes from 'lodash/includes';
import ClickOutside from 'react-click-outside';
import styles from './menu-styles.scss';

class Menu extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  renderInsideLink(option, withAction = false) {
    const { succesfulActions } = this.props;
    return (
      <div className={styles.documentLink} key={option.label}>
        {option.icon &&
          (withAction && succesfulActions.includes(option.label) ? (
            <Icon icon={checkIcon} className={styles.icon} />
          ) : (
            <Icon icon={option.icon} className={styles.icon} />
          ))}
        <span className={styles.title}>{option.label}</span>
      </div>
    );
  }

  renderLink(option) {
    if (option.path) {
      return (
        <NavLink
          to={option.path}
          className={styles.link}
          activeClassName={styles.active}
          onClick={this.handleCloseMenu}
        >
          {this.renderInsideLink(option)}
        </NavLink>
      );
    }
    return option.action ? (
      <button
        className={styles.link}
        onClick={() => this.handleActionClick(option)}
      >
        {this.renderInsideLink(option, true)}
      </button>
    ) : (
      <a
        className={styles.link}
        target={option.target || '_blank'}
        href={option.link}
        onClick={this.handleCloseMenu}
      >
        {this.renderInsideLink(option)}
      </a>
    );
  }

  renderButton() {
    const {
      icon,
      title,
      buttonClassName,
      currentPathname,
      options,
      open,
      toggleOpen
    } = this.props;

    const paths = options.map(option => option.path);
    const active = includes(paths, currentPathname);

    return (
      <button
        className={cx(styles.button, buttonClassName, {
          [styles.active]: open || active
        })}
        onClick={toggleOpen}
      >
        {title && <div className={styles.title}>{title}</div>}
        {icon && <Icon icon={icon} className={styles.icon} />}
        {!icon && <Icon icon={arrow} className={styles.arrowIcon} />}
      </button>
    );
  }

  render() {
    const {
      options,
      reverse,
      positionRight,
      open,
      handleCloseMenu,
      className
    } = this.props;
    return (
      <ClickOutside
        onClickOutside={handleCloseMenu}
        className={cx(
          styles.dropdown,
          { [styles.reverse]: reverse },
          { [styles.positionRight]: positionRight },
          className
        )}
      >
        {this.renderButton()}
        <ul className={cx(styles.links, { [styles.open]: open })}>
          {options.map(option => (
            <li key={option.label}>{this.renderLink(option)}</li>
          ))}
        </ul>
      </ClickOutside>
    );
  }
}

Menu.propTypes = {
  options: PropTypes.array.isRequired,
  icon: PropTypes.object,
  title: PropTypes.string,
  reverse: PropTypes.bool,
  positionRight: PropTypes.bool,
  buttonClassName: PropTypes.string,
  currentPathname: PropTypes.string,
  succesfulActions: PropTypes.array,
  open: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Menu;
