import React, { PureComponent } from 'react';
import Header from 'components/header';
import Search from 'components/search';
import TrackingTarget from 'components/tracking-target';
import Dropdown from 'components/dropdown';
import PropTypes from 'prop-types';
import styles from './tracking-styles.scss';

class Tracking extends PureComponent {
  render() {
    const {
      categories,
      selectedCategory,
      search,
      handleOnSearch,
      handleYearChange
    } = this.props;
    const isNotNdcTargetsCategory =
      categories && selectedCategory && selectedCategory !== 'ndc_targets';
    return (
      categories && (
        <div>
          <Header
            title="Tracking"
            navSections={categories}
            actions={
              <Dropdown
                placeholder="Select a year"
                options={[
                  { label: '2017', value: 2017 },
                  { label: '2018', value: 2018 }
                ]}
                defaultValue={{ label: '2018', value: 2018 }}
                label="Year"
                handleChange={handleYearChange}
                hideResetButton
              />
            }
          />
          {isNotNdcTargetsCategory && (
            <div className={styles.actionsWrapper}>
              <div className={styles.actions}>
                <Search
                  placeholder="Search something"
                  value={search}
                  onChange={handleOnSearch}
                  className={styles.search}
                />
              </div>
            </div>
          )}
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
                    updatedAt={target.updated_at}
                    reportedPercentage={target.reported_percentage}
                    editActionLink={`/tracking/${selectedCategory}/${target.slug}`}
                  />
                ))}
          </div>
        </div>
      )
    );
  }
}

Tracking.propTypes = {
  categories: PropTypes.array,
  search: PropTypes.string,
  selectedCategory: PropTypes.string,
  handleOnSearch: PropTypes.func.isRequired,
  handleYearChange: PropTypes.func
};

export default Tracking;
