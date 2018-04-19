import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import ReactTooltip from 'react-tooltip';
import Icon from 'components/icon';
import infoIcon from 'assets/icons/info.svg';

import grayIconTheme from 'styles/themes/icon/icon-gray.scss';
import styles from './info-icon-styles.scss';

class InfoIcon extends PureComponent {
  componentDidMount() {
    ReactTooltip.rebuild();
  }
  render() {
    const { text, className, theme } = this.props;
    return (
      <span
        className={cx(className, theme.icon)}
        data-tip={text}
        role="tooltip"
      >
        <Icon theme={grayIconTheme} icon={infoIcon} />
      </span>
    );
  }
}

InfoIcon.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.object
};

export default themr('InfoIcon', styles)(InfoIcon);
