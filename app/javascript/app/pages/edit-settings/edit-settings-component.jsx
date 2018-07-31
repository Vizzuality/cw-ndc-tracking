import React, { PureComponent } from 'react';
import Header from 'components/header';
import Input from 'components/input';
import ActionFooter from 'components/action-footer';
import PropTypes from 'prop-types';
import styles from './edit-settings-styles.scss';
import EditInput from './edit-input';

class EditSettings extends PureComponent {
  render() {
    const { handleSubmit, handleValueChange, fields } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Settings" className={styles.header} />
        {fields.map(i => (
          <EditInput key={i.slug} name={i.label} description={i.description}>
            <Input
              inputType={i.type}
              placeholder={i.placeholder}
              onChange={value =>
                handleValueChange('password_confirmation', value)}
              onBlur={value =>
                handleValueChange('password_confirmation', value)}
            />
          </EditInput>
        ))}
        <ActionFooter onActionClick={handleSubmit} />
      </div>
    );
  }
}

EditSettings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  fields: PropTypes.array
};

export default EditSettings;
