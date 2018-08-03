import { connect } from 'react-redux';
import Component from './settings-component';

const mapStateToProps = ({ user }) => ({ user: user && user.data });

export default connect(mapStateToProps, null)(Component);
