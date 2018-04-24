import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-first-router';
import isEmpty from 'lodash/isEmpty';
import ReportingComponent from './reporting-component';

const updatedTargets = (category, sectionSlug) =>
  category.targets.map(target => ({
    ...target,
    [sectionSlug]: target.indicators || []
  }));

const parseCategories = sections => {
  const categories = [];
  sections.forEach(section => {
    section.categories.forEach(category => {
      const existingCategory = categories.find(c => category.slug === c.slug);
      if (!existingCategory) {
        const updatedCategory = category;
        const targets = updatedTargets(updatedCategory, section.slug);
        updatedCategory.targets = targets;
        categories.push(updatedCategory);
      } else {
        const index = categories.indexOf(existingCategory);
        const updatedExistingCategory = { ...existingCategory };
        const targets = updatedTargets(updatedExistingCategory, section.slug);
        categories[index] = { ...categories[index], targets };
      }
    });
  });
  return categories;
};

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
  const categories = isEmpty(sections) ? [] : parseCategories(sections);

  const query = location.query;
  if (query) goToQuery(query);

  return {
    routes: Object.values(location.routesMap).filter(r => !!r.nav),
    categories
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
