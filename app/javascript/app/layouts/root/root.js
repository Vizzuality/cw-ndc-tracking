import { connect } from 'react-redux';
import { DEFAULT_TARGET } from '../../constants/defaults';

import Component from './root-component';

const mapStateToProps = ({ location, sections }) => ({
  route: location.routesMap[location.type],
  sections: sections.map(section => ({
    ...section,
    path: `/${section.slug}/${DEFAULT_TARGET}`
  }))
});

export default connect(mapStateToProps, null)(Component);
