import React, { PureComponent } from 'react';
import Header from 'components/header';
import Input from 'components/input';
import ActionFooter from 'components/action-footer';
import PropTypes from 'prop-types';
import styles from './edit-settings-styles.scss';
import EditInput from './edit-input';

class EditSettings extends PureComponent {
  render() {
    const {
      handleSubmit,
      handleValueChange,
      fields,
      user,
      errors
    } = this.props;
    return (
      <div className={styles.page}>
        <Header title="Settings" className={styles.header} />
        {fields.map(i => (
          <EditInput key={i.slug} name={i.label}>
            <Input
              inputType={i.type}
              placeholder={i.placeholder}
              errorMessages={(errors[i.slug] || []).concat(errors.all || [])}
              className={styles.alertContainer}
              value={user[i.slug]}
              onChange={value => handleValueChange(i.slug, value)}
              onBlur={value => handleValueChange(i.slug, value)}
              required
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
  user: PropTypes.object,
  fields: PropTypes.array,
  errors: PropTypes.object
};

export default EditSettings;
