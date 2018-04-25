import { connect } from 'react-redux';

import Component from './nav-component';

const actions = null;
// const actions = [{ name: 'Setup' }];

const mapStateToProps = () => ({
  actions
});

export default connect(mapStateToProps, null)(Component);
