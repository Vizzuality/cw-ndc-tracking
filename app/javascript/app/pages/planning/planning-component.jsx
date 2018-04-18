import React, { PureComponent } from 'react';
import Header from 'components/header';
import PropTypes from 'prop-types';

// import styles from './planning-styles.scss';

class Planning extends PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <Header title="Planning" routes={routes} />
      </div>
    );
  }
}

Planning.propTypes = {
  routes: PropTypes.array
};

export default Planning;
