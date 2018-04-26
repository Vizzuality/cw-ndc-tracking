import React, { PureComponent } from 'react';
import Header from 'components/header';
import PropTypes from 'prop-types';
import Search from 'components/search';

import styles from './edit-target-styles.scss';

class EditTarget extends PureComponent {
  render() {
    const { target, handleOnSearch, searchValue } = this.props;
    return (
      <div className={styles.page}>
        <Header title={target} backButton />
        <div className={styles.actionsWrapper}>
          <div className={styles.actions}>
            <Search
              placeholder="Search something"
              value={searchValue}
              onChange={handleOnSearch}
              className={styles.search}
            />
          </div>
        </div>
      </div>
    );
  }
}

EditTarget.propTypes = {
  target: PropTypes.string,
  handleOnSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string
};

export default EditTarget;
