import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

import Nav from 'components/nav';
import Footer from 'components/footer';

import styles from './root-styles.scss'; // eslint-disable-line

class App extends PureComponent {
  render() {
    const { route } = this.props;
    const Component = route && route.component;
    return (
      <div className={styles.app}>
        <Nav />
        {Component && <Component />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  route: Proptypes.object.isRequired
};

export default App;
