import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import Nav from 'components/nav';
import tooltipTheme from 'styles/themes/tooltip/default.scss';
import styles from './root-styles.scss'; // eslint-disable-line

class Root extends PureComponent {
  render() {
    const { route, sections } = this.props;
    const hasSections = sections.length > 1;
    const Component = route && route.component;
    return (
      <div className={styles.app}>
        {hasSections && <Nav navSections={sections} />}
        <div className={styles.contentLayout}>{Component && <Component />}</div>
        <ReactTooltip className={tooltipTheme.tooltip} />
      </div>
    );
  }
}

Root.propTypes = {
  route: Proptypes.object.isRequired,
  sections: Proptypes.array.isRequired
};

export default Root;
