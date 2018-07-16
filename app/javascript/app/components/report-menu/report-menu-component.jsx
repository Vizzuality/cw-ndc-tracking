import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import { NavLink } from 'redux-first-router-link';
import { REPORTING } from 'app/router';
import cx from 'classnames';
import layout from 'styles/layout';
import styles from './report-menu-styles.scss';

class ReportMenu extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { categories, activeCategory, activeTarget } = this.props;
    return (
      <div className={cx(styles.ReportMenu, layout.noPrint)}>
        <Sticky top={90}>
          {categories.length > 0 &&
            categories.map(category => (
              <Fragment key={category.title}>
                <div className={styles.categoryTitle}>
                  <NavLink
                    to={{
                      type: REPORTING,
                      payload: {
                        query: {
                          category: category.slug,
                          target:
                            category.targets[0] && category.targets[0].slug
                        }
                      }
                    }}
                    activeClassName={styles.active}
                    isActive={() => category.slug === activeCategory}
                  >
                    {category.title}
                  </NavLink>
                </div>
                <Fragment>
                  {category.targets.length > 0 &&
                    category.targets.map(target => (
                      <div key={target.title} className={styles.target}>
                        <NavLink
                          to={{
                            type: REPORTING,
                            payload: {
                              query: {
                                category: category.slug,
                                target: target.slug
                              }
                            }
                          }}
                          activeClassName={styles.active}
                          isActive={() =>
                            category.slug === activeCategory &&
                            target.slug === activeTarget}
                        >
                          {target.title}
                        </NavLink>
                      </div>
                    ))}
                </Fragment>
              </Fragment>
            ))}
        </Sticky>
      </div>
    );
  }
}

ReportMenu.propTypes = {
  categories: PropTypes.array,
  activeCategory: PropTypes.string,
  activeTarget: PropTypes.string
};

export default ReportMenu;
