import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

import Nav from 'components/nav';

import styles from './root-styles.scss'; // eslint-disable-line

class Root extends PureComponent {
  render() {
    const { route } = this.props;
    const Component = route && route.component;
    return (
      <div className={styles.app}>
        <Nav />
        {Component && <Component />}
      </div>
    );
  }
}

Root.propTypes = {
  route: Proptypes.object.isRequired
};

export default Root;
