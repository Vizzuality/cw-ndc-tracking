import { PureComponent, createElement } from 'react';
import { connect } from 'react-redux';

import Component from './edit-target-component';

const mapStateToProps = ({ location }) => ({ target: location.payload.target });

class EditTargetContainer extends PureComponent {
  render() {
    const handleOnSearch = () => {
      // TODO: search
    };

    return createElement(Component, {
      ...this.props,
      handleOnSearch
    });
  }
}

export default connect(mapStateToProps, null)(EditTargetContainer);
