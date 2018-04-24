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

const getSelectedCategory = sections =>
  (hasSections(sections)
    ? sections.find(section => section.slug === 'tracking').categories[0].slug
    : null);

const mapStateToProps = ({ location, sections }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav),
  selectedCategory: getSelectedCategory(sections),
  categories: getCategories(sections)
});

export default connect(mapStateToProps, null)(TrackingComponent);
