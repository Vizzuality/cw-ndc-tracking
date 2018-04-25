import React, { PureComponent } from 'react';
import Target from 'components/target';
import Header from 'components/header';
import PropTypes from 'prop-types';

import styles from './planning-styles.scss';

class Planning extends PureComponent {
  componentDidMount() {
    const { setDefaultCategory, pathname } = this.props;
    setDefaultCategory(pathname);
  }

  render() {
    const { categories, selectedCategory } = this.props;
    const hasCategories = Object.keys(categories).length > 0;
    return (
      <div className={styles.page}>
        {hasCategories && <Header title="Planning" navSections={categories} />}
        <div className={styles.targetsContainer}>
          {hasCategories &&
            selectedCategory &&
            categories
              .find(category => category.slug === selectedCategory)
              .targets.map(target => (
                <Target
                  title={target.title}
                  key={target.slug}
                  summary={target.summary}
                  hasRemoveAction
                  hasEditAction
                  infoText="text"
                />
              ))}
        </div>
      </div>
    );
  }
}

Planning.propTypes = {
  selectedCategory: PropTypes.string,
  categories: PropTypes.array,
  setDefaultCategory: PropTypes.func,
  pathname: PropTypes.string
};

export default Planning;
