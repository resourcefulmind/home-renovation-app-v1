import React, { useContext } from 'react';
import './styles/Calculation.css';
import RightSideImage from '../components/RightSideImage';
import HomeFront from '../assets/house_front.png';
import Bathroom from '../assets/minimalist_bathroom.png';
import BathroomDesign from '../assets/bathroom.png';
import Marble from '../assets/marble_design.png';
import LeftSide from '../components/LeftSide';
import { GlobalContext } from '../context/GlobalContext';


const CalculationPage = () => {
    const { globalStep } = useContext(GlobalContext)

    return <div className='wrapper'>
        <div>
            <LeftSide />
        </div>
        <div className='image_wrapper'>
            {(globalStep === 1 || globalStep === 5) && <RightSideImage src={HomeFront} name={"house"} />}
            {globalStep === 2 && <RightSideImage src={Bathroom} name={"bathroom"} />}
            {globalStep === 3 && <RightSideImage src={BathroomDesign} name={"BathroomDesign"} />}
            {globalStep === 4 && <RightSideImage src={Marble} name={"marble"} />}
        </div>
    </div>
};

export default CalculationPage;