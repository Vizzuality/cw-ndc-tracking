import { connect } from 'react-redux';
import { SETTINGS } from 'app/router';
import Component from './user-menu-component';

const mapStateToProps = () => {
  const userMenuOptions = [
    {
      label: 'SETTINGS',
      path: { type: SETTINGS }
    },
    {
      label: 'LOGOUT',
      action: null
    }
  ];
  return { userMenuOptions };
};

export default connect(mapStateToProps, null)(Component);
