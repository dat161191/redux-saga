import { Button, FormGroup, Spinner } from "reactstrap";
import React from "react";
import { PHOTO_CATEGORY_OPTIONS } from "constant/global";
import { FastField, Formik } from "formik";
import { Form } from "formik";
import InputField from "custom-fields/InputField";
import PropTypes from 'prop-types';
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import './photoForm.scss';
import * as Yup from 'yup';

const PhotoForm = (props) => {
    PhotoForm.propTypes = {
        onSubmit: PropTypes.func,
    };

    PhotoForm.defaultProps = {
        onSubmit: null,
    }
    const { initialValues, isAddMode } = props;
    console.log(initialValues)
    const validationSchema = Yup.object().shape({
        title: Yup.string().trim().required('This field is required!'),
        categoryId: Yup.number().required('This field is required!').nullable(),
        photo: Yup.string().required('This field is required!'),

        // Chọn chỉ định required khi select option VD: chọn Technology mới bắt required
        // photo: Yup.string().when('categoryId', {
        //     is: 1,
        //     then: Yup.string().required('This field is required.'),
        //     otherwise: Yup.string().notRequired(),
        // })

    })
    return (
        <div className="photo-form">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={props.onSubmit}>
                {formikProps => {
                    const { values, errors, touched, isSubmitting } = formikProps;
                    // console.log({ values, errors, touched })
                    return (
                        <Form>
                            {/* FastField dùng cho các ô input riêng biệt không liên quan đến nhau
                         => chỉ thay đổi mới render.
                         - Nhận vào 2 props là name và component
                         - label và placeholder là props của {InputField} */}
                            <FastField
                                name="title"
                                component={InputField}
                                label="Title"
                                placeholder="Wow nature..." />

                            <FastField
                                name="categoryId"
                                component={SelectField}
                                label="Category"
                                placeholder="What's your photo category?..."
                                options={PHOTO_CATEGORY_OPTIONS} />

                            <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo" />

                            <FormGroup>
                                <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                                    {isSubmitting && <Spinner size='sm' />}
                                    {isAddMode ? ' Add to album' : 'Edit photo'}
                                </Button>
                            </FormGroup>
                        </Form>
                    )
                }}
            </Formik>
        </div>


    )
}; export default PhotoForm;