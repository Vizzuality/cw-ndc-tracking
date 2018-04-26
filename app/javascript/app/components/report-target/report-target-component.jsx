import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import capitalize from 'lodash/capitalize';

import styles from './report-target-styles.scss';

class ReportTarget extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  renderSection(sectionTitle) {
    const renderIndicator = indicator => (
      <div
        key={indicator.slug}
        className={cx(styles.indicator, {
          [styles.textarea]: indicator.type === 'textarea'
        })}
      >
        <div className={styles.title}>{indicator.title}</div>
        <div className={styles.value}>{indicator.value}</div>
      </div>
    );

    const { target } = this.props;
    return (
      <div key={sectionTitle} className={styles[sectionTitle]}>
        {sectionTitle === 'tracking' && (
          <div className={styles.trackingHeader}>{target.year}</div>
        )}
        <div className={styles.section}>
          {target[sectionTitle].map(indicator => (
            <div
              key={indicator.slug}
              className={cx(styles.indicator, {
                [styles.textarea]: indicator.type === 'textarea'
              })}
            >
              {renderIndicator(indicator)}
            </div>
          ))}
        </div>
      </div>
    );
  }
  render() {
    const { target, separator, id } = this.props;
    const sections = ['planning', 'tracking'];
    const renderSections = () =>
      sections.map(
        section =>
          target[section] &&
          target[section].length > 0 &&
          this.renderSection(section)
      );

    return (
      target && (
        <div key={target.title} className={styles.target} id={id}>
          <div className={styles.targetName}>{capitalize(target.title)}</div>
          <div className={styles.summary}>{target.summary}</div>
          {renderSections()}
          {separator && <div className={styles.separator} />}
        </div>
      )
    );
  }
}

ReportTarget.propTypes = {
  target: PropTypes.object,
  separator: PropTypes.bool,
  id: PropTypes.string
};

export default ReportTarget;
