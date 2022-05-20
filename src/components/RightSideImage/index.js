import React from 'react';
import './RightSideImage.css';

const RightSideImage = ({ src, name }) => {
    return (
        <div className='rightSideImage_wrapper'>
            <div className='rightSideImage_overlay' />
            <img className='rightSideImage_image' src={src} alt={name} />
        </div>
    )
}

export default RightSideImage;