import React from "react";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import './addEdit.scss'
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";
import { randomNumber } from "util/common";
const AddEditPage = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();

    // get old photo by photoId from state redux
    const editPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(photo => photo.id === +photoId);
        console.log("check photoedit", foundPhoto);
        return foundPhoto;
    });
    const isAddMode = !photoId;
    const initialValues = isAddMode ? { title: '', categoryId: null, photo: '' } : editPhoto;
    const handleSubmit = (values) => {
        console.log("value form", values);
        return new Promise(resolve => {
            setTimeout(() => {
                if (isAddMode) {
                    // tạo action addPhoto với payload =values
                    const newPhoto = { ...values, id: randomNumber(0, 99999) }
                    const action = addPhoto(newPhoto);
                    console.log({ action });
                    dispatch(action);

                } else {
                    const action = updatePhoto(values);
                    dispatch(action)
                }
                history.push("/photos")
                resolve(true);
            }, 1000)
        })
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />
            <div className="photo-edit__form">
                <PhotoForm isAddMode={isAddMode} onSubmit={handleSubmit} initialValues={initialValues} />
            </div>
        </div>
    )
};
export default AddEditPage;