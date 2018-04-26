import { connect } from 'react-redux';
import PlanningComponent from './planning-component';

const hasSections = sections => Object.keys(sections).length > 0;
const getCategories = sections =>
  (hasSections(sections)
    ? sections
      .find(section => section.slug === 'planning')
      .categories.map(category => ({
        ...category,
        path: `/planning/${category.slug}`
      }))
    : []);

const mapStateToProps = ({ location, sections }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav),
  pathname: location.pathname,
  selectedCategory: location.payload.category,
  categories: getCategories(sections)
});

export default connect(mapStateToProps, null)(PlanningComponent);
