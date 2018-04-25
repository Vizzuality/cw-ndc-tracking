import { connect } from 'react-redux';
import { push } from 'redux-first-router';

import TrackingComponent from './tracking-component';

const defaultCategory = 'ndc_targets';

const setDefaultCategory = pathname =>
  !pathname.includes('/', 1) && push(`/tracking/${defaultCategory}`);

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
  pathname: location.pathname,
  setDefaultCategory,
  selectedCategory: getSelectedCategory(sections),
  categories: getCategories(sections)
});

export default connect(mapStateToProps, null)(TrackingComponent);
