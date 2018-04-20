import React, { PureComponent } from 'react';
import Header from 'components/header';
import Button from 'components/button';
import ReportTarget from 'components/report-target';
import ReportMenu from 'components/report-menu';
import PropTypes from 'prop-types';
import styles from './reporting-styles.scss';

class Reporting extends PureComponent {
  render() {
    const { categories, targets } = this.props;
    return (
      <div>
        <Header
          title="Reporting"
          actions={
            <div className={styles.actionButtonsLayout}>
              <Button>Save as XLS</Button>
              <Button>Save as PDF</Button>
            </div>
          }
        />
        <div className={styles.reportingContentLayout}>
          <ReportMenu categories={categories} />
          <div>
            {targets.length &&
              targets.map((target, i) => (
                <ReportTarget
                  target={target}
                  separator={i !== targets.length - 1}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

Reporting.propTypes = {
  targets: PropTypes.array,
  categories: PropTypes.array
};

export default Reporting;
