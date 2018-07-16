import React, { PureComponent, Fragment } from 'react';
import Header from 'components/header';
import Button from 'components/button';
import ReportTarget from 'components/report-target';
import ReportMenu from 'components/report-menu';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import whiteButtonTheme from 'styles/themes/button/button-white.scss';
import layout from 'styles/layout';
import cx from 'classnames';
import printStyles from './reporting-print-styles.scss';
import styles from './reporting-styles.scss';

class Reporting extends PureComponent {
  render() {
    const {
      categories,
      handleAnchorChange,
      activeCategory,
      activeTarget
    } = this.props;
    return (
      <div>
        <Header
          title="Reporting"
          className={layout.noPrint}
          actions={
            <div className={styles.actionButtonsLayout}>
              <Button theme={whiteButtonTheme}>Save as XLS</Button>
              <Button theme={whiteButtonTheme} onClick={() => window.print()}>
                Save as PDF
              </Button>
            </div>
          }
        />
        <div
          className={cx(
            styles.reportingContentLayout,
            printStyles.reportingContentLayout
          )}
        >
          <ReportMenu
            className={styles.noPrint}
            categories={categories}
            activeCategory={activeCategory}
            activeTarget={activeTarget}
          />
          <div>
            {categories.length > 0 &&
              categories.map(
                (category, categoryIndex) =>
                  category.targets &&
                  category.targets.map((target, targetIndex) => (
                    <Fragment key={target.title}>
                      <Waypoint
                        onEnter={scrollProperties =>
                          scrollProperties.event &&
                          handleAnchorChange(category.slug, target.slug)} // event is null if not scrolling
                        fireOnRapidScroll={false}
                      />
                      <ReportTarget
                        target={target}
                        separator={
                          categoryIndex !== categories.length - 1 ||
                          targetIndex !== category.targets.length - 1
                        }
                        id={`${category.slug}+${target.slug}`}
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
  handleAnchorChange: PropTypes.func.isRequired,
  activeCategory: PropTypes.string,
  activeTarget: PropTypes.string
};

export default Reporting;
