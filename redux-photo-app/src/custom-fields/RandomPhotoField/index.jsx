import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import { RandomPhoto } from 'components/RandomPhoto';

function RandomPhotoField(props) {
    RandomPhotoField.propTypes = {
        field: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,

        label: PropTypes.string,
    };

    RandomPhotoField.defaultProps = {
        label: '',
    }
    const { field, form, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    // Set lại 1 trường của form có giá trị mới = newImageUrl
    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />

            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default RandomPhotoField;