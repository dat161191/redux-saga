import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

const InputField = (props) => {
    InputField.propTypes = {
        field: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,

        type: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
    };

    InputField.defaultProps = {
        type: 'text',
        label: '',
        placeholder: '',
        disabled: false,
    }
    /** 
     * field, form là props của formik bao gồm  { name, values, onChange, onBlur }
     * type, label, placeholder, disabled là props LTV tự định nghĩa thêm cho Input
     */
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;

    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                // or {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError} />
            {/* {showError && <FormFeedback><p>{errors[name]}</p></FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default InputField;