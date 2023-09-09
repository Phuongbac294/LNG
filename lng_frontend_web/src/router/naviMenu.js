import React from 'react';
import {NavLink,} from 'react-router-dom';
import '../css/base.css';
import '../css/naviMenu.css';


function Menu_Navigation(props) {
    return (
        <div className="menu_navi grid">
            <ul className='menu_navi_list'>
                <li className='menu_navi_list-item'>
                    <NavLink to="/" className="link">Home</NavLink>
                </li>
                <li className='menu_navi_list-item'>
                    <NavLink to="/Content" className="link">Content</NavLink>
                </li>
            </ul>

            <ul className='menu_navi_list'>
                <li className='menu_navi_list-item'>
                    <NavLink to="/Register" className="link">Register</NavLink>
                </li>
                <li className='menu_navi_list-item'>
                    <NavLink to="/Login" className="link">Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu_Navigation;