import { connect } from 'react-redux';
import { PureComponent, createElement } from 'react';
import { history } from 'redux-first-router';
import qs from 'query-string';
import { updateUrlParam } from 'utils/navigation';
import { filterCategoryTargetsBySearch } from './planning-selectors';
import PlanningComponent from './planning-component';

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

class PlanningContainer extends PureComponent {
  render() {
    const handleOnSearch = query => {
      updateUrlParam({ name: 'search', value: query });
    };

    function getTargetMetaData(target, slug) {
      if (!target || !target.indicators) return null;
      const targetMetaDataField = target.indicators.find(
        ind => ind.slug === slug
      );
      return targetMetaDataField && targetMetaDataField.values[0].value;
    }

    function getSelectedCategoryTitle(categories, selectedCategory) {
      if (!categories || !selectedCategory) return null;
      return categories.find(c => c.slug === selectedCategory).title;
    }

    return createElement(PlanningComponent, {
      ...this.props,
      handleOnSearch,
      getTargetMetaData,
      getSelectedCategoryTitle
    });
  }
}

export default connect(mapStateToProps, null)(PlanningContainer);
