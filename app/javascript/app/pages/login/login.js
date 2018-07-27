import { connect } from 'react-redux';
import { login } from '../../services/login.service';
import { setUser, navigateToPlanning } from './login-actions';
import Component from './login-component';

const handleLoginThunk = (password, email) => dispatch =>
  login(password, email).then(function (data) {
    dispatch(setUser(data));
    localStorage.setItem('CWTTT', data.authentication_token);
    localStorage.setItem('user', data.email);
    dispatch(navigateToPlanning());
  });

const mapStateToProps = state => ({
  notice:
    state.location && state.location.payload && state.location.payload.notice,
  handleLoginThunk
});

export default connect(mapStateToProps)(Component);
