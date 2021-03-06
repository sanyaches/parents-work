/**
 *
 * EditForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { FormattedMessage } from 'react-intl';
import Button from '../Button';
import EditFormSection from '../EditFormSection';
import styles from './styles.scss';

/* eslint-disable react/require-default-props  */
class EditForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const buttonStyle = this.props.showLoader ? { display: 'none' } : {};
    return (
      <div className={styles.stmeditForm}>
        <form onSubmit={this.props.onSubmit} autoComplete="nope">
          <div className={styles.stmformContainer}>
            {map(this.props.sections, (section, key) => {
              let line;
              // display hr only if next section
              if (key + 1 < this.props.sections.length) {
                line = <hr />;
              }
              return (
                <div key={key} className={styles.stmsectionContainer}>
                  <EditFormSection
                    section={section}
                    values={this.props.values}
                    onChange={this.props.onChange}
                    cancelAction={this.props.cancelAction}
                    formErrors={this.props.formErrors}
                  />
                  {line}
                </div>
              );
            })}
          </div>
          <div className={styles.stmbuttonContainer}>
            <FormattedMessage id="settings-manager.form.button.cancel">
              {message => (
                <Button
                  type="button"
                  label={message}
                  buttonSize={'buttonMd'}
                  buttonBackground={'secondary'}
                  onClick={this.props.onCancel}
                  style={buttonStyle}
                />
              )}
            </FormattedMessage>
            <FormattedMessage id="settings-manager.form.button.save">
              {message => (
                <Button
                  type="submit"
                  loader={this.props.showLoader}
                  label={message}
                  buttonSize={'buttonLg'}
                  buttonBackground={'primary'}
                  onClick={this.props.onSubmit}
                />
              )}
            </FormattedMessage>
          </div>
        </form>
      </div>
    );
  }
}

EditForm.propTypes = {
  cancelAction: PropTypes.bool,
  formErrors: PropTypes.array,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  sections: PropTypes.array,
  showLoader: PropTypes.bool,
  values: PropTypes.object,
};

export default EditForm;
