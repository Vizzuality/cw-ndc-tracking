import { connect } from 'react-redux';

import TrackingComponent from './tracking-component';

// const categories = [
//   {
//     title: 'NDC Targets',
//     slug: 'ndc_targets',
//     targets: []
//   },
//   {
//     title: 'Policies and actions',
//     slug: 'policies_and_actions',
//     targets: []
//   },
//   {
//     title: 'Finance and support',
//     slug: 'finance_and_support',
//     targets: []
//   },
//   {
//     title: 'Assessing progress',
//     slug: 'assessing_progress',
//     targets: []
//   }
// ];

const hasSections = sections =>
  (Object.keys(sections).length > 0);

const mapStateToProps = ({ location, sections }) => ({
  routes: Object.values(location.routesMap).filter(r => !!r.nav),
  selectedCategory: hasSections(sections) ? sections.find(section => (section.slug === 'tracking')).categories[0].slug : null,
  categories: hasSections(sections) ? sections.find(section => (section.slug === 'tracking')).categories : []
});

export default connect(mapStateToProps, null)(TrackingComponent);
