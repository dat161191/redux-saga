import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

/**
 * Props: name ; imageURL; onImageUrlChange ; onRandomButtonBlur
 * @param {*} props 
 */

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 1000);
    return `http://picsum.photos/id/${randomId}/300/300`
}
export const RandomPhoto = (props) => {
    RandomPhoto.propTypes = {
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        onImageUrlChange: PropTypes.func,
        onRandomButtonBlur: PropTypes.func,
    };

    RandomPhoto.defaultProps = {
        name: '',
        imageUrl: '',
        onImageUrlChange: null,
        onRandomButtonBlur: null,
    }
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl)
        }
    }
    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick} >
                    Random Photos
                </Button>
            </div>

            <div className="random-photo__photo">
                {imageUrl && <img src={imageUrl} alt="Ooops...not found. Please click random again!"
                    onError={handleRandomPhotoClick} />}
            </div>

        </div>
    )
}
