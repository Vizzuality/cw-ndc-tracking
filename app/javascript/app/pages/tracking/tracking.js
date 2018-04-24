import { connect } from 'react-redux';

import TrackingComponent from './tracking-component';

const hasSections = sections => Object.keys(sections).length > 0;

const mapStateToProps = ({ location, sections }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav),
  selectedCategory: hasSections(sections)
    ? sections.find(section => section.slug === 'tracking').categories[0].slug
    : null,
  categories: hasSections(sections)
    ? sections
      .find(section => section.slug === 'tracking')
      .categories.map(category => ({
        ...category,
        path: `/tracking/${category.slug}`
      }))
    : []
});

export default connect(mapStateToProps, null)(TrackingComponent);
