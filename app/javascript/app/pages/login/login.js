import { connect } from 'react-redux';
import { login } from '../../services/login.service';
import { setUser, navigateToPlanning } from './login-actions';
import Component from './login-component';

const handleLoginThunk = (password, email) => dispatch =>
  login(password, email).then(function (data) {
    dispatch(setUser(data));
    dispatch(navigateToPlanning());
  });

const mapStateToProps = () => ({
  handleLoginThunk
});

export default connect(mapStateToProps)(Component);
