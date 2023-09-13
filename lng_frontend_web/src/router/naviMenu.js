import React from 'react';
import {NavLink,} from 'react-router-dom';
import '../css/base.css';
import '../css/naviMenu.css';



function Menu_Navigation(props) {
    const isslogin = false
    return (
        <div className="menu_navi grid">
            <ul className='menu_navi_list'>
                <li className='menu_navi_list-item'>
                    <NavLink to="/" className="link">Home</NavLink>
                </li>
                <li className='menu_navi_list-item'>
                    <NavLink to="/Product" className="link">Sản Phẩm</NavLink>
                </li>
                <li className='menu_navi_list-item'>
                    <NavLink to="/Service" className="link">Dịch Vụ</NavLink>
                </li>
                <li className='menu_navi_list-item'>
                    <NavLink to="/Contact" className="link">Liên Hệ</NavLink>
                </li>
                {!isslogin ?
                <>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/TongHop" className="link">Tổng hợp</NavLink>
                    </li>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/QuanLy" className="link">Quản lý</NavLink>
                    </li>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/Xe" className="link">Xe</NavLink>
                    </li>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/KhoBon" className="link">Bồn</NavLink>
                    </li>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/KhoSanXuat" className="link">Sản xuất</NavLink>
                    </li>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/BaoVe" className="link">Bảo Vệ</NavLink>
                    </li>
                </>
                : <></>
                }
            </ul>
            {isslogin ?
                <ul className='menu_navi_list'>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/Register" className="link">Register</NavLink>
                    </li>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/Login" className="link">Login</NavLink>
                    </li>
                </ul>
                :
                <ul className='menu_navi_list'>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/User" className="link">User</NavLink>
                    </li>
                    <li className='menu_navi_list-item'>
                        <NavLink to="/Order" className="link">Đơn hàng</NavLink>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Menu_Navigation;