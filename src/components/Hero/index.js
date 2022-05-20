import React from 'react'
import "./Hero.css";
import { FaRegArrowAltCircleRight } from 'react-icons/fa';


const Hero = () => {
  return (
      <div>
            <div className='hero'>
                <div className="overlay" />
                <div className='text_wrapper'>
                    <h1 className='hero_title'>
                        Get Instant Calculation On Your Home Renovation
                    </h1>
                    <p className='sub_title'>
                        Home Improvement calculations should be very easy and worry-free.
                        At Cerebellum we provide the best home renovation estimates, whether
                        minimalist, royal or luxury.
                    </p>
                </div>

                <a href='/calculation' className='btn-1'>
                    Calculate Now
                    <FaRegArrowAltCircleRight />
                </a>
                
                <div className='footer'>
                    <div className='footer_inner' />
                    <div className='footer_inner' />
                    <div className='footer_inner' />
                </div>
            </div>


        </div>
    
  )
}



export default Hero