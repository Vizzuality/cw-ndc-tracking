import { connect } from 'react-redux';
import Component from './nav-component';

const mapStateToProps = ({ location }) => ({ location });

export default connect(mapStateToProps, null)(Component);
