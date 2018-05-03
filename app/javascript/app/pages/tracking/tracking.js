import { connect } from 'react-redux';
import { getCategories } from './tracking-selectors';
import TrackingComponent from './tracking-component';

const mapStateToProps = ({ location, sections }) => ({
  pathname: location.pathname,
  selectedCategory: location.payload.category,
  categories: getCategories({ sections })
});

export default connect(mapStateToProps, null)(TrackingComponent);
