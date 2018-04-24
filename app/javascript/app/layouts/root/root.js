import { connect } from 'react-redux';

import Component from './root-component';

const mapStateToProps = ({ location, sections }) => ({
  route: location.routesMap[location.type],
  sections: sections.map(section => ({ ...section, path: `/${section.slug}` }))
});

export default connect(mapStateToProps, null)(Component);
