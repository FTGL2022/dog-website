import React from 'react'
import { BsXDiamondFill } from 'react-icons/bs'
import { FaFire } from'react-icons/fa'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { Link } from'react-router-dom'
import { Button } from './Button'
import "./Pricing.css"

function Pricing() {
  return (
    <IconContext.Provider value={{ color: 'white', size: '64px' }}>
    
      <div className='pricing-section' >
        <div className='pricing_wrapper'>
            <h1 className='pricing__heading'>Pricing</h1>
            <div className='pricing__container'>
            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <FaFire />
                </div>
                <h3>Standard</h3>
                <h4>25€</h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Simple Bath</li>
                    <li>Nail Trimming</li>
                    <li>Ear Cleaning</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Choose Plan</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <BsXDiamondFill />
                </div>
                <h3>Luxury</h3>
                <h4>60€</h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Hydration Bath</li>
                    <li>Teeth Brushing</li>
                    <li>Ear Cleaning</li>
                    
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Choose Plan</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <GiCrystalize />
                </div>
                <h3>Premium</h3>
                <h4>40€</h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Hydration Bath</li>
                    <li>Teeth Brushing</li>
                    <li>Nail Trimming</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Choose Plan

                </Button>
            </div>
            </Link>
        </div>
      </div>
    </div>
    </IconContext.Provider>
    
  );
}

export default Pricing
