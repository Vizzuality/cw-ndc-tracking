import { connect } from 'react-redux';
import { PureComponent, createElement } from 'react';
import { history } from 'redux-first-router';
import qs from 'query-string';
import { updateUrlParam } from 'utils/navigation';
import { filterCategoryTargetsBySearch } from './tracking-selectors';
import TrackingComponent from './tracking-component';

const mapStateToProps = ({ location, sections }) => {
  const query = qs.parse(history().location.search);
  const search = (query && query.search) || null;
  const state = {
    sections,
    search
  };
  return {
    pathname: location.pathname,
    selectedCategory: location.payload.category,
    categories: filterCategoryTargetsBySearch(state),
    search
  };
};

class TrackingContainer extends PureComponent {
  render() {
    const handleOnSearch = query => {
      updateUrlParam({ name: 'search', value: query });
    };

    return createElement(TrackingComponent, {
      ...this.props,
      handleOnSearch
    });
  }
}

export default connect(mapStateToProps, null)(TrackingContainer);
