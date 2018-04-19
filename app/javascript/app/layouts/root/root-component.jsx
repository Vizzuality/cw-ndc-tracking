import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import Nav from 'components/nav';
import tooltipTheme from 'styles/themes/tooltip/default.scss';
import styles from './root-styles.scss'; // eslint-disable-line

class App extends PureComponent {
  render() {
    const { route } = this.props;
    const Component = route && route.component;
    return (
      <div className={styles.app}>
        <Nav />
        {Component && <Component />}
        <ReactTooltip className={tooltipTheme.tooltip} />
      </div>
    );
  }
}

App.propTypes = {
  route: Proptypes.object.isRequired
};

export default App;
