import { connect } from 'react-redux';
import Component from './user-menu-component';

const mapStateToProps = () => {
  const userMenuOptions = [
    {
      label: 'LOGOUT',
      action: null
    }
  ];
  return { userMenuOptions };
};

export default connect(mapStateToProps, null)(Component);
