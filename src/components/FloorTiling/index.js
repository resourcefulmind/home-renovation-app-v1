import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../GlobalStyles.css';
import BackButton from '../Back';
import SelectButton from '../SelectButton';
import SingleButton from '../SingleButton';

const FloorType = [
    {
        id: 1,
        name: "Marble"
    }, 
    {
        id: 2,
        name: "Ceramic"
    }
];

const CeramicData = [
    {
        id: 1,
        name: "Economy",
        price: 15
    },
    {
        id: 2,
        name: "Standard",
        price: 35
    },
    {
        id: 3,
        name: "Premium",
        price: 75
    },
]

const MarbleData = [
    {
        id: 1,
        name: "Economy",
        price: 50
    },
    {
        id: 2,
        name: "Standard",
        price: 95
    },
    {
        id: 3,
        name: "Premium",
        price: 150
    },
]

const FloorTiling = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { 
        setGlobalStep, 
        globalStep,
        isChangingFloorTiling,
        setIsChangingFloorTiling,
        floorTilingType,
        setFloorTilingType,
        selectedFloorTiling,
        setSelectedFloorTiling 
    } = useContext(GlobalContext);

    const resetValues = () => {
        setIsChangingFloorTiling(false);
        setFloorTilingType({ name: "", price: 0 });
        setSelectedFloorTiling("");
    }

    return (
        <div className='rightSide_inner_wrapper'>
            <BackButton onClick={() => {
                if(isChangingFloorTiling && currentStep > 0) {
                    setCurrentStep(value => value - 1)
                } else {
                    setGlobalStep(value => value - 1)
                }
            }} />

            <div>
                <p className='step_header'>Step {globalStep} of 4</p>
                {currentStep === 0 && <div>
                    <h4 className='question_header'>Are you changing your floor tiling?</h4>
                    <div className='buttons_wrapper'>
                        <button 
                            type="button"
                            onClick={() => {
                                setCurrentStep(1)
                                setIsChangingFloorTiling(true)
                            }}
                            className="options_button"
                        >
                            Yes
                        </button>
                        <button 
                            type="button"
                            onClick={() => {
                                setGlobalStep(value => value + 1);
                                resetValues();
                            }}
                            className="options_button"
                        >
                            No
                        </button>
                    </div>
                </div>}

                {currentStep === 1 && <div>
                    <h4 className='question_header'>Select a floor type</h4>
                    <div className='options_wrapper'>
                        {FloorType.map(item => <SelectButton 
                                key={item.id}
                                onClick={() => setFloorTilingType(item.name)} 
                                label={item.name} 
                                active={item.name === floorTilingType} 
                            /> 
                        )}
                    </div>
                </div>}

                {floorTilingType !== "" && currentStep === 2 && <div>
                    <h4 className='question_header'>Select a {floorTilingType}</h4>
                    <div className='options_wrapper'>
                        {floorTilingType === "Marble" && MarbleData.map(item => <SelectButton 
                                key={item.id}
                                onClick={() => setSelectedFloorTiling(item)} 
                                label={item.name} 
                                active={item.name === selectedFloorTiling.name} 
                            /> 
                        )}

                        {floorTilingType === "Ceramic" && CeramicData.map(item => <SelectButton 
                                key={item.id}
                                onClick={() => setSelectedFloorTiling(item)} 
                                label={item.name} 
                                active={item.name === selectedFloorTiling.name} 
                            /> 
                        )}
                    </div>
                </div>}

            </div>

            <div>
                {currentStep >= 1 && <SingleButton 
                onClick={() => {
                    if(currentStep < 2) {
                        setCurrentStep(value => value + 1)
                    } else {
                        setGlobalStep(value => value + 1)
                    }
                }} 
                name={"Next"} 
            />}
            </div>
        </div>
    )
}

export default FloorTiling;