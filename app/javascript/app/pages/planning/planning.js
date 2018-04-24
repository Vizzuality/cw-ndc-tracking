import { connect } from 'react-redux';

import PlanningComponent from './planning-component';

const hasSections = sections => Object.keys(sections).length > 0;

const mapStateToProps = ({ location, sections }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav),
  selectedCategory: hasSections(sections)
    ? sections.find(section => section.slug === 'planning').categories[0].slug
    : null,
  categories: hasSections(sections)
    ? sections
      .find(section => section.slug === 'planning')
      .categories.map(category => ({
        ...category,
        path: `/planning/${category.slug}`
      }))
    : []
});

export default connect(mapStateToProps, null)(PlanningComponent);
