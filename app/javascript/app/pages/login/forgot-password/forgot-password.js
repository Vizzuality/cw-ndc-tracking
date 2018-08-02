import { connect } from 'react-redux';
import { requestNewPassword } from 'services/login.service';
import Component from './forgot-password-component';
import { navigateToLogin } from './forgot-password-actions';

const handleForgotPasswordClick = email => {
  requestNewPassword(email).then(ok => {
    if (ok) navigateToLogin();
  });
};

const mapDispatchToProps = () => ({ handleForgotPasswordClick });

export default connect(null, mapDispatchToProps)(Component);
