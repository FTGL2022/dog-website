import React, {useEffect, useState, } from 'react'
import {Link} from "react-router-dom";
import {FaBars, FaDog, FaTimes} from "react-icons/fa";
import "./Button.css"
import "./Navbar.css"
import { Button } from "./Button";
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const [button, setButton] = useState(true);
    const closeMobibleMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener("resize", showButton);

    useEffect(() => {
        showButton();
    }, [])


    const scroolToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

  return (
    <>
    <IconContext.Provider value={{ color: "coral" }}>
      <div className='navbar'>
        <div className='navbar-container container'>
            <Link to="/" className="navbar-logo" onClick={closeMobibleMenu}>
            <FaDog className='navbar-icon'/>
            Dog Wash
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}

            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item' >
                    <Link to ="/" className='nav-links' onClick={() => { closeMobibleMenu (); scroolToTop();}}>
                    Home
                    </Link>
                </li>
                <li className='nav-item' >
                    <Link to ="/services" className='nav-links' onClick={() => {closeMobibleMenu (); scroolToTop();}} >
                    Services
                    </Link>
                </li>
                <li className='nav-item' >
                    <Link to ="/products" className='nav-links' onClick={() => { closeMobibleMenu (); scroolToTop();}} >
                    Products
                    </Link>
                </li>
                <li className='nav-item' >
                    <Link to ="/Add to 🛒 " className='nav-links' onClick={() => { closeMobibleMenu(); scroolToTop();}} >
                    Add to 🛒
                    </Link>
                </li>
                <li className='nav-btn' >
                   {button ? (
                    <Link to="/sign-up" className='btn-link' onClick={() => {closeMobibleMenu (); scroolToTop();}}>
                        <Button buttonStyle="btn-outline">SIGN UP</Button>
                    </Link>
                   ): (
                    <Link to="/sign-up" className='btn-link' onClick={closeMobibleMenu}>
                        <Button buttonStyle="btn--outline"
                        buttonSize="btn--mobile">
                            SIGN UP

                        </Button>
                    </Link>
                   )}
                </li>

            </ul>

        </div>
      </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
