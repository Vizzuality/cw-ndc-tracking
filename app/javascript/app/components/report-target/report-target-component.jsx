import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import capitalize from 'lodash/capitalize';

import layout from 'styles/layout';
import printStyles from './report-target-print-styles.scss';
import styles from './report-target-styles.scss';

class ReportTarget extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  renderSection(sectionTitle) {
    const renderIndicator = indicator => (
      <Fragment>
        <div className={cx(styles.title, layout.noPageBreak)}>
          {indicator.title}
        </div>
        {indicator.values.map(v => (
          <div key={v.label} className={styles.value}>
            {v.label !== 'Value' && v.value && `${v.label}: `}
            <span
              dangerouslySetInnerHTML={{ __html: v.value }} // eslint-disable-line
            />
            {v.unit && ` ${v.unit}`}
          </div>
        ))}
      </Fragment>
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
              className={cx(styles.indicator, layout.noPageBreak, {
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
          <div className={cx(styles.targetName, printStyles.targetName)}>
            {capitalize(target.title)}
          </div>
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
