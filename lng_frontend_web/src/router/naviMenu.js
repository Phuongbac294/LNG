import React from 'react';
import {NavLink,} from 'react-router-dom';
import '../css/header.css';


function Menu_Navigation(props) {
    return (
        <div className="menu_navi">
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Content" >Content</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/Register" >Register</NavLink>
                </li>
                <li>
                    <NavLink to="/Login" >Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu_Navigation;