import { connect } from 'react-redux';

import PlanningComponent from './planning-component';

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(PlanningComponent);
