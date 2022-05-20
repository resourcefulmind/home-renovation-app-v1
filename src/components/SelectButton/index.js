import React from 'react';
import './SelectButton.css';

const SelectButton = ({ onClick, label, active }) => {
    return (
        <button 
            className={active ? 'selection_button__active' :'selection_button'} 
            type='button' 
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default SelectButton;