import { connect } from 'react-redux';
import { PureComponent, createElement } from 'react';
import { history } from 'redux-first-router';
import qs from 'query-string';
import { updateUrlParam } from 'utils/navigation';
import { filterCategoryTargetsBySearch } from './planning-selectors';
import PlanningComponent from './planning-component';

const mapStateToProps = ({ location, planning }) => {
  const query = qs.parse(history().location.search);
  const search = (query && query.search) || null;
  const state = {
    planning,
    search
  };
  return {
    pathname: location.pathname,
    selectedCategory: location.payload.category,
    categories: filterCategoryTargetsBySearch(state),
    search
  };
};

class PlanningContainer extends PureComponent {
  render() {
    const handleOnSearch = query => {
      updateUrlParam({ name: 'search', value: query });
    };

    return createElement(PlanningComponent, {
      ...this.props,
      handleOnSearch
    });
  }
}

export default connect(mapStateToProps, null)(PlanningContainer);
