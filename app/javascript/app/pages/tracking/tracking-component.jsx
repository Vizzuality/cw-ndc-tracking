import React, { PureComponent } from 'react';
import Header from 'components/header';
import TrackingTarget from 'components/tracking-target';
import Dropdown from 'components/dropdown';
import PropTypes from 'prop-types';
import styles from './tracking-styles.scss';

class Tracking extends PureComponent {
  render() {
    const { categories, selectedCategory } = this.props;
    return (
      <div>
        <Header
          title="Tracking"
          navSections={categories}
          actions={
            <Dropdown
              placeholder="Select a year"
              options={[
                { label: '1984', value: '1984' },
                { label: '2020', value: '2020' }
              ]}
              label="Year"
            />
          }
        />
        <div className={styles.targetsContainer}>
          {categories &&
            selectedCategory &&
            categories
              .find(category => category.slug === selectedCategory)
              .targets.map(target => (
                <TrackingTarget
                  key={target.title}
                  title={target.title}
                  summary={target.summary}
                  reportedPercentage={100}
                  editActionLink={`/tracking/${selectedCategory}/${target.slug}`}
                />
              ))}
        </div>
      </div>
    );
  }
}

Tracking.propTypes = {
  categories: PropTypes.array,
  selectedCategory: PropTypes.string
};

export default Tracking;
