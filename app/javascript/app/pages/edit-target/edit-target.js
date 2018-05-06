import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { history } from 'redux-first-router';
import { updateUrlParam } from 'utils/navigation';
import qs from 'query-string';
import PropTypes from 'prop-types';
import { patchIndicator } from 'providers/indicators.provider';
import { getTarget, getIndicators } from './edit-target-selectors';
import Component from './edit-target-component';

const mapStateToProps = ({ location, sections, indicators }) => {
  const query = qs.parse(history().location.search);
  const section = location.pathname.split('/')[1];
  const category = location.payload.category;
  const state = {
    sections,
    section,
    category,
    indicators,
    target: location.payload.target,
    search: (query && query.search) || null
  };

  return {
    section,
    category,
    target: getTarget(state),
    indicators: getIndicators(state),
    search: state.search
  };
};

const mapDispatchToProps = dispatch => ({
  handlePatchIndicator: (urlParams, valueParams) =>
    dispatch(patchIndicator(urlParams, valueParams))
});

class EditTargetContainer extends PureComponent {
  render() {
    const handleOnSearch = query => {
      updateUrlParam({ name: 'search', value: query });
    };

    // eslint-disable-next-line consistent-return
    const handleEditIndicator = (indicatorId, valueLabel, value) => {
      const {
        section,
        category,
        target,
        handlePatchIndicator,
        indicators
      } = this.props;
      const indicator = indicators.find(i => i.id === indicatorId);
      const valueToUpdate =
        indicator && indicator.values.find(v => v.label === valueLabel);
      if (valueToUpdate && valueToUpdate.value !== value) {
        return handlePatchIndicator(
          { section, category, target: target.slug, indicator: indicatorId },
          { valueLabel, value }
        );
      }
    };

    return createElement(Component, {
      ...this.props,
      handleOnSearch,
      handleEditIndicator
    });
  }
}

EditTargetContainer.propTypes = {
  section: PropTypes.string,
  category: PropTypes.string,
  target: PropTypes.object,
  indicators: PropTypes.array,
  handlePatchIndicator: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(
  EditTargetContainer
);
