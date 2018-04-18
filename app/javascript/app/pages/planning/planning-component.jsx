import React, { PureComponent } from 'react';
import Target from 'components/target';
import styles from './planning-styles.scss';

class Planning extends PureComponent {
  render() {
    return (
      <div className={styles.page}>
        <Target
          title={'GHG target'}
          summary={
            'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.'
          }
          reportedPercentage={77}
        />
        <Target
          title={'GHG target'}
          summary={
            'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.'
          }
          reportedPercentage={100}
        />
      </div>
    );
  }
}

export default Planning;
