import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-first-router';
import { parseCategories } from './reporting-selectors';
import ReportingComponent from './reporting-component';

const mapStateToProps = ({ location, sections }) => {
  const state = { sections };
  return {
    routes: Object.values(location.routesMap).filter(r => !!r.nav),
    categories: parseCategories(state)
  };
};

class ReportingContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeCategory: null,
      activeTarget: null
    };
  }

  handleAnchorChange = (categorySlug, targetSlug) => {
    push(`reporting?category=${categorySlug}&target=${targetSlug}`);
    this.setState({
      activeCategory: categorySlug,
      activeTarget: targetSlug
    });
  };

  render() {
    return createElement(ReportingComponent, {
      ...this.props,
      activeCategory: this.state.activeCategory,
      activeTarget: this.state.activeTarget,
      handleAnchorChange: this.handleAnchorChange
    });
  }
}

export default connect(mapStateToProps, null)(ReportingContainer);
