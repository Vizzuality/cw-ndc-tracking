import React, { PureComponent } from 'react';
import Search from 'components/search';
import Indicator from 'components/indicator';
import styles from './home-styles.scss';

class Home extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.page}>
        <h2>Home page</h2>
        <Search
          placeholder="Search a country"
          value={''}
          onChange={() => true}
          className={styles.search}
          autofocus
        />
        <div>
          <Indicator
            title="titleee"
            fieldType="textarea"
            inputUnit="tons"
            label="ghg emissions"
          />
          <Indicator
            title="Conditional upon international provision of means of implementation: capacity building, technology development and transfer, financing"
            fieldType="dropdown"
            dropdownOptions={[
              { label: 'No', value: 'No' },
              { label: 'Yes', value: 'Yes' }
            ]}
          />
          <Indicator
            title="Emissions level in base year"
            fieldType="number"
            inputUnit="MtCO2eq"
            label="Value"
          />
        </div>
      </div>
    );
  }
}

export default Home;
