import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';

import styles from './report-menu-styles.scss';

class ReportMenu extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { categories } = this.props;
    return (
      <div className={styles.ReportMenu}>
        <Sticky top={20}>
          {categories.length &&
            categories.map(category => (
              <Fragment key={category.title}>
                <div className={styles.categoryTitle}>{category.title}</div>
                <div className={styles.targets}>
                  {category.targets.length &&
                    category.targets.map(target => (
                      <div key={target.title} className={styles.target}>
                        {target.title}
                      </div>
                    ))}
                </div>
              </Fragment>
            ))}
        </Sticky>
      </div>
    );
  }
}

ReportMenu.propTypes = {
  categories: PropTypes.array
};

export default ReportMenu;
