import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../GlobalStyles.css';
import BackButton from '../Back';
import SelectButton from '../SelectButton';
import SingleButton from '../SingleButton';

const SanitaryToiletData = [
    {
        id: 1,
        name: "Economy",
        price: 200
    },
    {
        id: 2,
        name: "Standard",
        price: 1000
    },
    {
        id: 3,
        name: "Premium",
        price: 3000
    },
]

const SanitarySinkData = [
    {
        id: 1,
        name: "Economy",
        price: 350
    },
    {
        id: 2,
        name: "Standard",
        price: 700
    },
    {
        id: 3,
        name: "Premium",
        price: 1500
    },
]

const SanitaryBathtubData = [
    {
        id: 1,
        name: "Economy",
        price: 800
    },
    {
        id: 2,
        name: "Standard",
        price: 1500
    },
    {
        id: 3,
        name: "Premium",
        price: 4650
    },
]

const SanitaryProducts = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { 
        setGlobalStep, 
        globalStep, 
        isChangingSanitary, 
        setIsChangingSanitary, 
        selectedToilet, 
        setSelectedToilet,
        selectedSink,
        setSelectedSink,
        selectedBathtub,
        setSelectedBathtub 
    } = useContext(GlobalContext)

    const resetValues = () => {
        selectedToilet({ name: "", price: 0 });
        setSelectedBathtub({ name: "", price: 0 });
        setSelectedSink({ name: "", price: 0 })
    }

    return (
        <div className='rightSide_inner_wrapper'>
            <BackButton onClick={() => {
                if(isChangingSanitary && currentStep > 0) {
                    setCurrentStep(value => value - 1)
                } else {
                    setGlobalStep(value => value - 1);
                    resetValues();
                }
            }} />

            <div>
                <p className='step_header'>Step {globalStep} of 4</p>
                {currentStep === 0 && <div>
                    <h4 className='question_header'>Are you changing sanitary products?</h4>
                    <div className='buttons_wrapper'>
                        <button 
                            type="button"
                            onClick={() => {
                                setCurrentStep(1)
                                setIsChangingSanitary(true)
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
                    <h4 className='question_header'>Select a toilet</h4>
                    <div className='options_wrapper'>
                        {SanitaryToiletData.map(item => <SelectButton 
                                key={item.id}
                                onClick={() => setSelectedToilet(item)} 
                                label={item.name} 
                                active={item.name === selectedToilet.name} 
                            /> 
                        )}
                    </div>
                </div>}

                {currentStep === 2 && <div>
                    <h4 className='question_header'>Select a Sink</h4>
                    <div className='options_wrapper'>
                        {SanitarySinkData.map(item => <SelectButton 
                                key={item.id}
                                onClick={() => setSelectedSink(item)} 
                                label={item.name} 
                                active={item.name === selectedSink.name} 
                            /> 
                        )}
                    </div>
                </div>}

                {currentStep === 3 && <div>
                    <h4 className='question_header'>Select a Bathtub</h4>
                    <div className='options_wrapper'>
                        {SanitaryBathtubData.map(item => <SelectButton 
                                key={item.id}
                                onClick={() => setSelectedBathtub(item)} 
                                label={item.name} 
                                active={item.name === selectedBathtub.name} 
                            /> 
                        )}
                    </div>
                </div>}
            </div>

            <div>
                {currentStep >= 1 && <SingleButton 
                onClick={() => {
                    if(isChangingSanitary && currentStep < 3) {
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

export default SanitaryProducts;