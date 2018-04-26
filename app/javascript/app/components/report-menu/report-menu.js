import { connect } from 'react-redux';
import { createElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Component from './report-menu-component';

const mapStateToProps = ({ location }) => ({ location });

class ReportMenuContainer extends PureComponent {
  render() {
    const query = this.props.location.query;
    return createElement(Component, {
      ...this.props,
      activeCategory: (query && query.category) || this.props.activeCategory,
      activeTarget: (query && query.target) || this.props.activeTarget
    });
  }
}

ReportMenuContainer.propTypes = {
  activeCategory: PropTypes.string,
  activeTarget: PropTypes.string,
  location: PropTypes.object
};

export default connect(mapStateToProps, null)(ReportMenuContainer);
