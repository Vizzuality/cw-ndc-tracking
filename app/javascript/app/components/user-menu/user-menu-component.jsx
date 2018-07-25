import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/menu';
import userIcon from 'assets/icons/user.svg';
// import styles from './user-menu-styles.scss';

class UserMenu extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { userMenuOptions, className, name } = this.props;
    return (
      <Menu
        options={userMenuOptions}
        icon={userIcon}
        className={className}
        title={name}
      />
    );
  }
}

UserMenu.propTypes = {
  userMenuOptions: PropTypes.array,
  className: PropTypes.string,
  name: PropTypes.string
};

export default UserMenu;
