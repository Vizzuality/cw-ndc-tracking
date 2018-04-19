import React, { PureComponent } from 'react';
import Target from 'components/target';
import Header from 'components/header';
import PropTypes from 'prop-types';

import styles from './planning-styles.scss';

class Planning extends PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Planning" routes={routes} />
        <div className={styles.targetsContainer}>
          <Target
            title={'GHG target'}
            summary={
              'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.'
            }
            hasRemoveAction
            hasEditAction
            infoText="text"
          />
          <Target title={'GHG target'} hasEditAction infoText="info text" />
        </div>
      </div>
    );
  }
}

Planning.propTypes = {
  routes: PropTypes.array
};

export default Planning;
