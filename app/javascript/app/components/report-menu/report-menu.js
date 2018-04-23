import { history } from 'redux-first-router';
import { createElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Component from './report-menu-component';

class ReportMenuContainer extends PureComponent {
  render() {
    const hash = history().location.hash.substring(1);
    return createElement(Component, {
      ...this.props,
      activeCategory: this.props.activeCategory || (hash && hash.split('+')[0]),
      activeTarget: this.props.activeTarget || (hash && hash.split('+')[1])
    });
  }
}

ReportMenuContainer.propTypes = {
  activeCategory: PropTypes.string,
  activeTarget: PropTypes.string
};

export default ReportMenuContainer;
