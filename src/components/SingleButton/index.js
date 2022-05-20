import React from 'react';
import './SingleButton.css';

const SingleButton = ({ onClick, name }) => {
    return (
        <div className='singleButton_wrapper'>
         <button className='singleButton' type='button' onClick={onClick}>{name}</button>
        </div>
    )
}

export default SingleButton;