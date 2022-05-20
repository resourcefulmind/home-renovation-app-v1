import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../GlobalStyles.css';
import BackButton from '../Back';
import SingleButton from '../SingleButton';

const Budget = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { setIsBudgetAvailable, budget, setBudget, setGlobalStep, globalStep } = useContext(GlobalContext)

    return (
        <div className='rightSide_inner_wrapper'>
            <div>
                {currentStep === 1 && <BackButton onClick={() => {
                    setIsBudgetAvailable(false)
                    setCurrentStep(value => value - 1)
                }} />}
            </div>

            <div>
                <p className='step_header'>Step {globalStep} of 4</p>
                <h4 className='question_header'>Do you have a budget?</h4>

                {currentStep === 0 && <div className='buttons_wrapper'>
                    <button 
                        type="button"
                        onClick={() => {
                            setCurrentStep(1)
                            setIsBudgetAvailable(true)

                        }}
                        className="options_button"
                    >
                        Yes
                    </button>
                    <button 
                        type="button"
                        onClick={() => setGlobalStep(value => value + 1)}
                        className="options_button"
                    >
                        No
                    </button>
                </div>}

                {currentStep === 1 && <div>
                        <input 
                            placeholder='Enter your budget'
                            className='input'
                            type= "number"
                            value={budget === 0 ? "" : budget}
                            onChange={(e) => setBudget(e.target.value)}
                        />
                    </div>}
            </div>
            
            <div>
                {currentStep === 1 && <SingleButton onClick={() => setGlobalStep(value => value + 1)} name={"Next"} />}
            </div>
        </div>
    )
}

export default Budget;