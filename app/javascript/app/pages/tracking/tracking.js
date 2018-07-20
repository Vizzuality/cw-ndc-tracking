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
    const handleYearChange = year => year; // TODO: Update year;

    function getSelectedCategoryTitle(categories, selectedCategory) {
      if (!categories || !selectedCategory) return null;
      return categories.find(c => c.slug === selectedCategory).title;
    }

    return createElement(TrackingComponent, {
      ...this.props,
      handleOnSearch,
      handleYearChange,
      getSelectedCategoryTitle
    });
  }
}

export default connect(mapStateToProps, null)(TrackingContainer);
