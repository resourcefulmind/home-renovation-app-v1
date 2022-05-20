import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../GlobalStyles.css';
import BackButton from '../Back';
import SelectButton from '../SelectButton';
import SingleButton from '../SingleButton';

const BathroomData = [
    {
        id: 1,
        name: "Small",
        size: 9
    },
    {
        id: 2,
        name: "Medium",
        size: 12
    },
    {
        id: 3,
        name: "Large",
        size: 16
    },
]

const Bathroom = () => {
    const { setGlobalStep, globalStep, bathroomSize, setBathroomSize } = useContext(GlobalContext)

    return (
        <div className='rightSide_inner_wrapper'>
            <BackButton onClick={() => {
                    setGlobalStep(value => value - 1);
                }} 
            />

            <div>
                <p className='step_header'>Step {globalStep} of 4</p>
                <div>
                    <h4 className='question_header'>What is the size of your bathroom?</h4>
                    <div className='options_wrapper'>
                        {BathroomData.map(item => <SelectButton 
                                key={item.id}
                                onClick={() => setBathroomSize(item)} 
                                label={item.name} 
                                active={item.name === bathroomSize.name} 
                            /> 
                        )}
                    </div>
                </div>
            </div>

            <SingleButton onClick={() => setGlobalStep(value => value + 1)} name="Finish" />
        </div>
    )
}

export default Bathroom;