import React, { PureComponent } from 'react';
import Target from 'components/target';
import Header from 'components/header';
import PropTypes from 'prop-types';

import styles from './planning-styles.scss';

class Planning extends PureComponent {
  render() {
    const { categories, selectedCategory } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Planning" navSections={categories} />
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
                />
              ))}
        </div>
      </div>
    );
  }
}

Planning.propTypes = {
  selectedCategory: PropTypes.string,
  categories: PropTypes.array
};

export default Planning;
