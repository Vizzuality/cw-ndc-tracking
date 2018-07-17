import React, { PureComponent } from 'react';
import Target from 'components/target';
import Header from 'components/header';
import PropTypes from 'prop-types';
import Search from 'components/search';

import styles from './planning-styles.scss';

class Planning extends PureComponent {
  render() {
    const {
      categories,
      selectedCategory,
      handleOnSearch,
      search,
      getTargetMetaData
    } = this.props;
    const isNotNdcTargetsCategory =
      categories && selectedCategory && selectedCategory !== 'ndc_targets';
    return (
      categories && (
        <div className={styles.page}>
          <Header title="Planning" navSections={categories} />
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
                  <Target
                    title={target.title}
                    key={target.slug}
                    summary={target.summary}
                    editActionLink={`/planning/${selectedCategory}/${target.slug}`}
                    infoText="text"
                    targetType={getTargetMetaData(target, 'ghg_target_type')}
                    targetYear={getTargetMetaData(target, 'M_TarYr')}
                  />
                ))}
          </div>
        </div>
      )
    );
  }
}

Planning.propTypes = {
  selectedCategory: PropTypes.string,
  search: PropTypes.string,
  categories: PropTypes.array,
  handleOnSearch: PropTypes.func,
  getTargetMetaData: PropTypes.func
};

export default Planning;
