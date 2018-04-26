import { connect } from 'react-redux';

import TrackingComponent from './tracking-component';

const hasSections = sections => Object.keys(sections).length > 0;

const getCategories = sections =>
  (hasSections(sections)
    ? sections
      .find(section => section.slug === 'tracking')
      .categories.map(category => ({
        ...category,
        path: `/tracking/${category.slug}`
      }))
    : []);

const mapStateToProps = ({ location, sections }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav),
  pathname: location.pathname,
  selectedCategory: location.payload.category,
  categories: getCategories(sections)
});

export default connect(mapStateToProps, null)(TrackingComponent);
