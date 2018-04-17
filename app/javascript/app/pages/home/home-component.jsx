import React, { PureComponent } from 'react';
import Search from 'components/search';
import Dropdown from 'components/dropdown';
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
        <Dropdown
          placeholder="selection"
          options={[
            { label: 'value 1', value: 'value 1' },
            { label: 'value 2', value: 'value 2' }
          ]}
          label="select some stuff"
          disabled
        />
      </div>
    );
  }
}

export default Home;
