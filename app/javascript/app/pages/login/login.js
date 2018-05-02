import { connect } from 'react-redux';
import { login } from '../../services/login.service';
import Component from './login-component';

const handleLoginThunk = (password, email) => dispatch =>
  login(password, email).then(function (data) {
    dispatch({ type: 'SET_USER', payload: data });
    dispatch({ type: 'location/PLANNING' });
  });

const mapStateToProps = () => ({
  handleLoginThunk
});

export default connect(mapStateToProps)(Component);
