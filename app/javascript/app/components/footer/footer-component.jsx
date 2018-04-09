import React, { PureComponent } from 'react';
import cx from 'classnames';

import styles from './footer-styles.scss';

class Footer extends PureComponent {
  render() {
    const className = cx(styles.footer);
    return <footer className={className}>The footer</footer>;
  }
}

export default Footer;
