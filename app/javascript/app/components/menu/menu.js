import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';
import uniq from 'lodash/uniq';
import Component from './menu-component';

const mapStateToProps = state => ({
  currentPathname: state.location && state.location.pathname
});

class MenuContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
      succesfulActions: []
    };
  }

  componentDidUpdate() {
    const { succesfulActions, open } = this.state;
    if (!open && succesfulActions.length) {
      this.clearSuccessfulActions();
    }
  }

  clearSuccessfulActions() {
    this.setState({ succesfulActions: [] });
  }

  handleActionClick(option) {
    option.action();
    if (this) {
      const updatedActions = uniq(
        this.state.succesfulActions.concat(option.label)
      );
      this.setState({ succesfulActions: updatedActions });
    }
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    const { open, succesfulActions } = this.state;
    return createElement(Component, {
      ...this.props,
      handleActionClick: this.handleActionClick,
      handleCloseMenu: () => this.setState({ open: false }),
      toggleOpen: () => this.setState({ open: !open }),
      open,
      succesfulActions
    });
  }
}

export default connect(mapStateToProps, null)(MenuContainer);
