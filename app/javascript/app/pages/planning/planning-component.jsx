import React, { PureComponent } from 'react';
import cx from 'classnames';
import Target from 'components/target';
import Header from 'components/header';
import PropTypes from 'prop-types';
import Search from 'components/search';
import Button from 'components/button';

import yellowButtonTheme from 'styles/themes/button/button-yellow.scss';
import styles from './planning-styles.scss';

class Planning extends PureComponent {
  render() {
    const {
      categories,
      selectedCategory,
      handleOnSearch,
      search,
      getTargetMetaData,
      getSelectedCategoryTitle
    } = this.props;
    const hasAddTarget =
      categories &&
      selectedCategory &&
      (selectedCategory === 'ndc_targets' ||
        selectedCategory === 'user_defined_targets');
    return (
      categories && (
        <div className={styles.page}>
          <Header title="Planning" navSections={categories} />
          <div className={styles.actionsWrapper}>
            <div
              className={cx(styles.actions, {
                [styles.doubleAction]: hasAddTarget
              })}
            >
              <Search
                placeholder={`Filter ${getSelectedCategoryTitle(
                  categories,
                  selectedCategory
                )}`}
                value={search}
                onChange={handleOnSearch}
                className={styles.search}
              />
              {hasAddTarget && (
                <Button theme={yellowButtonTheme} link={'TODO'}>
                  Add target
                </Button>
              )}
            </div>
          </div>
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
  getTargetMetaData: PropTypes.func,
  getSelectedCategoryTitle: PropTypes.func
};

export default Planning;
