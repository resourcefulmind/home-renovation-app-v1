import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../GlobalStyles.css';
import './Estimation.css';

const Estimation = () => {
    const { 
        isBudgetAvailable, 
        budget,
        isChangingSanitary, 
        selectedToilet, 
        selectedSink, 
        selectedBathtub,
        isChangingFloorTiling, 
        selectedFloorTiling,
        bathroomSize
    } = useContext(GlobalContext)

    const SanitaryTotal = (selectedToilet.price + selectedSink.price + selectedBathtub.price)
    const overallTotal = (SanitaryTotal + selectedFloorTiling.price) * bathroomSize.size;

    return (
        <div className='rightSide_inner_wrapper'>
            <div className='estimation_wrapper'>
                <h4 className='question_header'>Total Estimation</h4>
                <div className='showcase_container'>
                    {isBudgetAvailable && <div className='showcase_wrapper'>
                        <p className='showcase_header'>Budget</p>
                        <p className='showcase_price'>${budget.toLocaleString("en-US", { maximumFractionDigits: 2})}</p>
                    </div>}
                    
                    {isChangingSanitary && <div className='showcase_wrapper'>
                        <p className='showcase_header'>Sanitary Products</p>
                        <p className='showcase_price'>
                            ${SanitaryTotal.toLocaleString("en-US", { maximumFractionDigits: 2})}
                        </p>
                    </div>}

                    {isChangingFloorTiling && <div className='showcase_wrapper'>
                        <p className='showcase_header'>Floor Tiling</p>
                        <p className='showcase_price'>
                            ${selectedFloorTiling.price.toLocaleString("en-US", { maximumFractionDigits: 2})}
                        </p>
                    </div>}

                    <div className='showcase_wrapper'>
                        <p className='showcase_header'>Bathroom Size</p>
                        <p className='showcase_price'>{bathroomSize.name}</p>
                    </div>
                </div>

                {((isBudgetAvailable && isChangingSanitary && isChangingFloorTiling) || (isChangingSanitary || isChangingFloorTiling))
                    ? <div className='total_wrapper'>
                    <h5 className='total_header'>Total</h5>
                    {overallTotal === budget && <h5 className='total_price'>${overallTotal.toLocaleString("en-US", { maximumFractionDigits: 2})}</h5>}
                    {budget > overallTotal && <h5 className='total_price_green'>${overallTotal.toLocaleString("en-US", { maximumFractionDigits: 2})}</h5>}
                    {budget < overallTotal && <h5 className='total_price_red'>${overallTotal.toLocaleString("en-US", { maximumFractionDigits: 2})}</h5>}
                </div>
                    : <div className='total_wrapper'>
                    <h5 className='total_header'>Total</h5>
                    <h5 className='total_price'>Not available</h5>
                </div> }
                
            </div>
        </div>
    )
}

export default Estimation;