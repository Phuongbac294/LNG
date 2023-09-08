import React from 'react';
import {NavLink,} from 'react-router-dom';
import '../css/header.css';


function Header(props) {
    return (
        <div className="header">
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

export default Header;