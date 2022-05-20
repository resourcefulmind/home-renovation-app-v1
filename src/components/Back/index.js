import React from 'react';
import './Back.css'

const BackButton = ({ onClick }) => {
    return (
        <button type='button' onClick={onClick} className="backButton">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#2E71FF" fillOpacity="0.18"/>
                <path d="M9.68784 10.0012H14" stroke="#2E71FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.00041 10.0063C6.00041 11.0885 9.06662 14.5478 9.41448 13.9257C9.76235 13.3037 9.79559 6.76838 9.41448 6.08686C9.03289 5.40533 6.00041 8.92498 6.00041 10.0063Z" stroke="#2E71FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
            
        </button>
    )
}

export default BackButton;