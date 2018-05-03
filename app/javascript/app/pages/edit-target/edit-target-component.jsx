import React, { PureComponent } from 'react';
import Header from 'components/header';
import PropTypes from 'prop-types';
import Search from 'components/search';
import Indicator from 'components/indicator';
import Loading from 'components/loading';
import styles from './edit-target-styles.scss';

class EditTarget extends PureComponent {
  render() {
    const { target, handleOnSearch, search, indicators } = this.props;
    return (
      <div className={styles.page}>
        <Header title={target && target.title} backButton />
        {target ? (
          <div className={styles.actionsWrapper}>
            <div className={styles.actions}>
              <Search
                placeholder="Search something"
                value={search}
                onChange={handleOnSearch}
                className={styles.search}
              />
            </div>
            <div className={styles.indicators}>
              {indicators.map(i => (
                <Indicator
                  key={i.slug}
                  title={i.title}
                  values={i.values}
                  infoText={i.title}
                  handleBlur={() => 'TODO save'}
                />
              ))}
            </div>
          </div>
        ) : (
          <Loading className={styles.loader} />
        )}
      </div>
    );
  }
}

EditTarget.propTypes = {
  target: PropTypes.object,
  handleOnSearch: PropTypes.func.isRequired,
  indicators: PropTypes.array,
  search: PropTypes.string
};

export default EditTarget;
