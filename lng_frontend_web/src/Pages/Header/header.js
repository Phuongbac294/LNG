import React from 'react';
import './header.css';
import logoAnphu from '../../img/logo-AP-removebg-preview.png'



function Header(props) {
    return (
        <ul className="header grid">
            <li className='header__logo'>
                <img className='header__img' src={logoAnphu} alt='logo'/>
            </li>
            <li className='header__company'>
                <h2 className='header__text_h2'>Công ty cổ phần năng lượng An Phú</h2>                
                <p className='header__text_p'>Năng lượng xanh cho cuộc sống</p>                    
            </li>            
        </ul>
    )
}

export default Header;