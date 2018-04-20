import React, { PureComponent, Fragment } from 'react';
import Header from 'components/header';
import Button from 'components/button';
import ReportTarget from 'components/report-target';
import ReportMenu from 'components/report-menu';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import styles from './reporting-styles.scss';

class Reporting extends PureComponent {
  render() {
    const { categories, handleAnchorChange } = this.props;
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
            {categories.length &&
              categories.map((category, categoryIndex) =>
                category.targets.map((target, targetIndex) => (
                  <Fragment key={target.title}>
                    <Waypoint
                      onEnter={() =>
                        handleAnchorChange(category.slug, target.slug)}
                    />
                    <ReportTarget
                      target={target}
                      separator={
                        categoryIndex !== categories.length - 1 ||
                        targetIndex !== category.targets.length - 1
                      }
                      id={`${category.slug}-${target.slug}`}
                    />
                  </Fragment>
                ))
              )}
          </div>
        </div>
      </div>
    );
  }
}

Reporting.propTypes = {
  categories: PropTypes.array,
  handleAnchorChange: PropTypes.func.isRequired
};

export default Reporting;
