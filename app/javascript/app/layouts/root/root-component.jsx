import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import Nav from 'components/nav';
import tooltipTheme from 'styles/themes/tooltip/default.scss';
import styles from './root-styles.scss'; // eslint-disable-line

class App extends PureComponent {
  render() {
    const { route, sections } = this.props;
    const hasSections = Object.keys(sections).length > 0;
    const Component = route && route.component;
    return (
      <div className={styles.app}>
        {hasSections && <Nav navSections={sections} />}
        {Component && <Component />}
        <ReactTooltip className={tooltipTheme.tooltip} />
      </div>
    );
  }
}

App.propTypes = {
  route: Proptypes.object.isRequired,
  sections: Proptypes.array.isRequired
};

export default App;
