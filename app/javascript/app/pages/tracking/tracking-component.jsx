import React, { PureComponent } from 'react';
import Header from 'components/header';
import TrackingTarget from 'components/tracking-target';
import Dropdown from 'components/dropdown';
import PropTypes from 'prop-types';
import styles from './tracking-styles.scss';

class Tracking extends PureComponent {
  componentDidMount() {
    const { setDefaultCategory, pathname } = this.props;
    setDefaultCategory(pathname);
  }

  render() {
    const { categories } = this.props;
    const hasCategories = Object.keys(categories).length > 0;
    return (
      <div>
        {hasCategories && (
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
        )}
        <div className={styles.targetsContainer}>
          <TrackingTarget
            title={'GHG target'}
            summary={
              'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.'
            }
            reportedPercentage={77}
          />
          <TrackingTarget
            title={'GHG target'}
            summary={
              'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.'
            }
            reportedPercentage={100}
          />
        </div>
      </div>
    );
  }
}

Tracking.propTypes = {
  categories: PropTypes.array,
  setDefaultCategory: PropTypes.func,
  pathname: PropTypes.string
};

export default Tracking;
