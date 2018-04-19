import React, { PureComponent } from 'react';
import Header from 'components/header';
import Dropdown from 'components/dropdown';
import PropTypes from 'prop-types';
// import styles from './tracking-styles.scss';

class Tracking extends PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <Header
          title="Tracking"
          routes={routes}
          actions={
            <Dropdown
              placeholder="Select a year"
              options={[
                { label: '1984', value: '1984' },
                { label: '2020', value: '2020' }
              ]}
              label="Year"
            />
          }
        />
      </div>
    );
  }
}

Tracking.propTypes = {
  routes: PropTypes.array
};

export default Tracking;
