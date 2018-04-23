import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-first-router';
import ReportingComponent from './reporting-component';

const fakeTarget = i => ({
  title: `GHG Target${i}`,
  slug: `ghg-target${i}`,
  summary:
    'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.',
  year: 2018,
  planning: [
    {
      title: 'GHG target type',
      slug: 'ghg_target_type',
      type: 'select',
      value: 'Base year target - Multi-year'
    },
    {
      title: 'Single or multi-year target',
      slug: 'time_single_multi_year_target',
      type: 'select',
      value: '2030'
    },
    {
      title: 'Target level of emissions',
      slug: 'time_target_emissions',
      type: 'textarea',
      value:
        'This contribution is consistent with emission levels of 1.3 GtCO2e(GWP - 100; IPCC AR5) in 2025 and 1.2 GtCO2e(GWP- 100; IPCC AR5) in 2030, corresponding, respectively, to a reduction of 37% and 43%, based on estimated emission levels of 2.1 GtCO2e(GWP - 100; IPCC AR5) in 2005.'
    },
    {
      title: 'Target year',
      slug: 'M_TarYr',
      type: 'input',
      value: '2040'
    }
  ],
  tracking: [
    {
      title: 'GHG target tracking',
      slug: 'ghg_target_type',
      type: 'select',
      value: 'Base year target - Multi-year'
    },
    {
      title: 'Single or multi-year target tracking',
      slug: 'time_single_multi_year_target',
      type: 'select',
      value: 'Base year target - Multi-year'
    },
    {
      title: 'Target level of emissions tracking',
      slug: 'time_target_emissions',
      type: 'textarea',
      value:
        'This contribution is consistent with emission levels of 1.3 GtCO2e(GWP - 100; IPCC AR5) in 2025 and 1.2 GtCO2e(GWP- 100; IPCC AR5) in 2030, corresponding, respectively, to a reduction of 37% and 43%, based on estimated emission levels of 2.1 GtCO2e(GWP - 100; IPCC AR5) in 2005.'
    },
    {
      title: 'Target year tracking',
      slug: 'M_TarYr',
      type: 'input',
      value: 'Base year target - Multi-year'
    }
  ]
});

const fakeCategories = [
  {
    title: 'NDC Targets',
    slug: 'ndc-targets',
    targets: [fakeTarget(1), fakeTarget(2)]
  },
  {
    title: 'Policies and actions',
    slug: 'policies-and-actions',
    targets: [fakeTarget(3), fakeTarget(4)]
  }
];

const goToQuery = query => {
  const hash = `${query.category}+${query.target}`;
  push(`reporting#${hash}`);
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView(true);
    window.scrollBy(0, -20);
  }
};

const mapStateToProps = props => {
  const query = props.location.query;
  if (query) goToQuery(query);

  return {
    routes: Object.values(props.location.routesMap).filter(r => !!r.nav),
    categories: fakeCategories
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
