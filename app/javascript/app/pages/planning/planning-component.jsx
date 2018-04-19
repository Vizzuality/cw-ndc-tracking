import React, { PureComponent } from 'react';
import PlanningTarget from 'components/planning-target';
import Header from 'components/header';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import deleteIcon from 'assets/icons/info.svg';

import squareButtonTheme from 'styles/themes/button/button-square.scss';
import blueIconTheme from 'styles/themes/icon/icon-blue.scss';

import styles from './planning-styles.scss';

class Planning extends PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Planning" routes={routes} />
        <div className={styles.targetsContainer}>
          <PlanningTarget
            title={'GHG target'}
            summary={
              'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.'
            }
          >
            <Button theme={squareButtonTheme} onClick={() => true}>
              <Icon theme={blueIconTheme} icon={deleteIcon} />
            </Button>
          </PlanningTarget>
          <PlanningTarget
            title={'GHG target'}
            summary={
              'Brazil intends to commit to reduce greenhouse gas emissions by 37% below 2005 levels in 2025.'
            }
          >
            <Button theme={squareButtonTheme} onClick={() => true}>
              <Icon theme={blueIconTheme} icon={deleteIcon} />
            </Button>
            <Button theme={squareButtonTheme} onClick={() => true}>
              <Icon theme={blueIconTheme} icon={deleteIcon} />
            </Button>
          </PlanningTarget>
        </div>
      </div>
    );
  }
}

Planning.propTypes = {
  routes: PropTypes.array
};

export default Planning;
