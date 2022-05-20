import React, { useContext } from 'react';
import './LeftSide.css';
import Budget from '../Budget';
import { GlobalContext } from '../../context/GlobalContext';
import SanitaryProducts from '../SanitaryProducts';
import FloorTiling from '../FloorTiling';
import Bathroom from '../Bathroom';
import Estimation from '../Estimation'

const LeftSide = () => {
    const { globalStep } = useContext(GlobalContext)

    return (
        <div className='leftSide_wrapper'>
            {globalStep === 1 && <Budget />}
            {globalStep === 2 && <SanitaryProducts />}
            {globalStep === 3 && <FloorTiling />}
            {globalStep === 4 && <Bathroom />}
            {globalStep === 5 && <Estimation />}
        </div>
    )
}

export default LeftSide;