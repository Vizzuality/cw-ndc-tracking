import { connect } from 'react-redux';
import { requestNewPassword } from 'services/login.service';
import Component from './forgot-password-component';
import { navigateToLogin } from './forgot-password-actions';

const handleForgotPasswordClick = email => dispatch => {
  requestNewPassword(email).then(ok => {
    if (ok) dispatch(navigateToLogin());
  });
};

const mapStateToProps = () => ({
  handleForgotPasswordClick
});

export default connect(mapStateToProps)(Component);
