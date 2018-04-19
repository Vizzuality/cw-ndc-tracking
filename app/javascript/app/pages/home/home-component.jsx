import React, { PureComponent } from 'react';
import Search from 'components/search';
import Indicator from 'components/indicator';
import Input from 'components/input';
import Dropdown from 'components/dropdown';
import InfoButton from 'components/button/info-button';
import ReactTooltip from 'react-tooltip';
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
        <InfoButton text={'hello'} />
        <ReactTooltip />
        <div>
          <Indicator title="titleee" isTextArea handleClick={() => true}>
            <Input
              label="Label for text area"
              unit="CO2"
              inputType="textarea"
              placeholder="Text Area"
              onChange={value => value}
              onBlur={value => value}
            />
          </Indicator>
          <Indicator
            title="Conditional upon international provision of means of implementation: capacity building, technology development and transfer, financing"
            handleClick={() => true}
          >
            <Dropdown
              options={[
                { label: 'No', value: 'No' },
                { label: 'Yes', value: 'Yes' }
              ]}
              label="ghg emissions"
            />
            <Dropdown
              options={[
                { label: 'No', value: 'No' },
                { label: 'Yes', value: 'Yes' }
              ]}
              label="ghg emissions"
            />
          </Indicator>
          <Indicator
            title="Emissions level in base year"
            handleClick={() => true}
          >
            <Dropdown
              options={[
                { label: 'No', value: 'No' },
                { label: 'Yes', value: 'Yes' }
              ]}
              label="ghg emissions"
            />
          </Indicator>
        </div>
      </div>
    );
  }
}

export default Home;
