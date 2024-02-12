import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "components/Banner";
import Images from "constant/image";
import { useSelector } from "react-redux";
import PhotoList from 'features/Photo/components/PhotoList';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editPhoto, editphoto, removePhoto } from "features/Photo/photoSlice";

const MainPage = (props) => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);
    const history = useHistory();
    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        // removePhotoId is a payload of action
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action)
    }

    return (
        <div className="photo-main">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.THOR} />
            <Container className="text-center">
                <Link to='/photos/add'>Add new photo</Link>
            </Container>
            <PhotoList
                photoList={photos}
                onPhotoEditClick={handlePhotoEditClick}
                onPhotoRemoveClick={handlePhotoRemoveClick}
            />
        </div>
    )

};
export default MainPage;
