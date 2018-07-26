import React, { PureComponent } from 'react';
import Header from 'components/header';
import Input from 'components/input';
import ActionFooter from 'components/action-footer';
import PropTypes from 'prop-types';
import styles from './edit-settings-styles.scss';

class EditSettings extends PureComponent {
  render() {
    const { handleSubmit, handleValueChange, fields, page } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Settings" className={styles.header} />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Edit {page}</h2>
          {fields.map(i => (
            <Input
              key={i.slug}
              label={i.label}
              inputType={i.type}
              placeholder={i.placeholder}
              onChange={value =>
                handleValueChange('password_confirmation', value)}
              onBlur={value =>
                handleValueChange('password_confirmation', value)}
            />
          ))}
        </div>
        <ActionFooter onActionClick={handleSubmit} />
      </div>
    );
  }
}

EditSettings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  fields: PropTypes.array,
  page: PropTypes.string
};

export default EditSettings;
