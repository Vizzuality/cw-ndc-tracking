import React, { PureComponent } from 'react';
import Header from 'components/header';
import Button from 'components/button';
import PropTypes from 'prop-types';
import styles from './reporting-styles.scss';

class Reporting extends PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <Header
          title="Reporting"
          routes={routes}
          actions={
            <div className={styles.actionButtonsLayout}>
              <Button>Save as XLS</Button>
              <Button>Save as PDF</Button>
            </div>
          }
        />
      </div>
    );
  }
}

Reporting.propTypes = {
  routes: PropTypes.array
};

export default Reporting;
