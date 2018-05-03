import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { history } from 'redux-first-router';
import { updateUrlParam } from 'utils/navigation';
import qs from 'query-string';
import { getTarget, getIndicators } from './edit-target-selectors';
import Component from './edit-target-component';

const mapStateToProps = ({ location, sections }) => {
  const query = qs.parse(history().location.search);
  const state = {
    sections,
    section: location.pathname.split('/')[1],
    category: location.payload.category,
    target: location.payload.target,
    search: (query && query.search) || null
  };

  return {
    target: getTarget(state),
    indicators: getIndicators(state),
    search: state.search
  };
};

class EditTargetContainer extends PureComponent {
  render() {
    const handleOnSearch = query => {
      updateUrlParam({ name: 'search', value: query });
    };

    return createElement(Component, {
      ...this.props,
      handleOnSearch
    });
  }
}

export default connect(mapStateToProps, null)(EditTargetContainer);
