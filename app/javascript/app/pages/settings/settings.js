import { connect } from 'react-redux';
import Component from './settings-component';

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Component);
