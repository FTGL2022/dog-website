import React from 'react'
import { BsXDiamondFill } from 'react-icons/bs'
import { FaFire } from'react-icons/fa'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import { Link } from'react-router-dom'
import { Button } from './Button'
import "./Products.css";

function Products() {
  return (
    <IconContext.Provider value={{ color: 'white', size: '64px' }}>
    
      <div className='pricing-section' >
        <div className='pricing_wrapper'>
            <h1 className='pricing__heading'>Products</h1>
            <div className='pricing__container'>
            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <FaFire />
                </div>
                <h3>Shampoos</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Shampoo for Sensitive Skin</li>
                    <li>Flea and Tick Shampoo</li>
                    <li>Medicinal Shampoo for Skin Issues</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <BsXDiamondFill />
                </div>
                <h3>Conditioners</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Hydrating Conditioner</li>
                    <li>Detangling Conditioner</li>
                    <li>Conditioner for Long-haired Dogs</li>
                    
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <GiCrystalize />
                </div>
                <h3>Sprays/Perfumes</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Coconut Oil for Hydration</li>
                    <li>Paw Hydrating Cream</li>
                    <li>Nose Balm</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add

                </Button>
            </div>
            </Link>
        </div>
      </div>
    </div>

    <div className='pricing-section' >
        <div className='pricing_wrapper'>
            <h1 className='pricing__heading'></h1>
            <div className='pricing__container'>
            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <FaFire />
                </div>
                <h3>Skin</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Coconut Oil for Hydration</li>
                    <li>Paw Hydrating Cream</li>
                    <li>Nose Balm</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <BsXDiamondFill />
                </div>
                <h3>Bath Accessories</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Soft Bristle Bath Brush</li>
                    <li>Massage and Bath Gloves</li>
                    <li>Bath Sponges for Dogs</li>
                    
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <GiCrystalize />
                </div>
                <h3>Hygiene Products</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Quick-drying Towels</li>
                    <li>Disposable Towels</li>
                    <li>Absorbent Mats</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add

                </Button>
            </div>
            </Link>
        </div>
      </div>
    </div>


    <div className='pricing-section' >
        <div className='pricing_wrapper'>
            <h1 className='pricing__heading'></h1>
            <div className='pricing__container'>
            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <FaFire />
                </div>
                <h3>Oral Hygiene Products</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Dog Toothpaste</li>
                    <li>Dog Toothbrush</li>
                    <li>Dental Spray for Dogs</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <BsXDiamondFill />
                </div>
                <h3>Ear and Eye Products</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>Ear Cleaning Solution</li>
                    <li>Eye Cleaning Wipes</li>
                    <li></li>
                    
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add</Button>
            </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
            <div className='pricing__container-cardInfo'>
                <div className='icon' >
                    <GiCrystalize />
                </div>
                <h3>Balm for Moisturizing Paw Pads</h3>
                <h4></h4>
                <p></p>
                <ul className='pricing__container-features'>
                    <li>moisturize and protect your dog's paw pads</li>
                    <li>Helps keep paw pads soft and healthy.</li>
                    <li>Provides comfort and protection </li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary" >Add

                </Button>
            </div>
            </Link>
        </div>
      </div>
    </div>

    </IconContext.Provider>
    
  );
}

export default Products;
