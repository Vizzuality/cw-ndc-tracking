import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-first-router';
import { parseCategories } from './reporting-selectors';
import ReportingComponent from './reporting-component';

const goToQuery = query => {
  const hash = `${query.category}+${query.target}`;
  push(`reporting#${hash}`);
  const element = document.getElementById(hash);
  const offset = -90;
  if (element) {
    element.scrollIntoView(true);
    window.scrollBy(0, offset);
  }
};

const mapStateToProps = ({ location, sections }) => {
  const query = location.query;
  if (query) goToQuery(query);
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
    push(`reporting#${categorySlug}+${targetSlug}`);
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
