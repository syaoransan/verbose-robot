import React from 'react'
import './Header.css'
import TeslaLogo from '../images/teslaLogoSmall.svg'

const Header = () => {
    return (
        <div className='Header'>
            <div id ="tesla-logo">
                 <img src={TeslaLogo} alt="Tesla-Logo"/>
            </div>
            <nav className="nav">
                <ul className='nav__list'>              
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Solar Roof</a></li>
                    <li><a href="#">Solar Panels</a></li> 
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Tesla Account</a></li>          
                </ul>
            </nav>
            
        </div>
    )
}

export default Header
