import { connect } from 'react-redux';
import { getCategories } from './planning-selectors';
import PlanningComponent from './planning-component';

const mapStateToProps = ({ location, sections }) => ({
  pathname: location.pathname,
  selectedCategory: location.payload.category,
  categories: getCategories({ sections })
});

export default connect(mapStateToProps, null)(PlanningComponent);
