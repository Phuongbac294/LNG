import React from 'react';
import { useState } from 'react';
import {NavLink,} from 'react-router-dom';
import logo from '../img/logo-AP-removebg-preview.png';
import '../css/base.css';
import '../css/header.css';
import '../css/login.css';

import { FaUser, FaLock, FaEyeSlash, FaEye, FaFacebookF, FaGoogle, FaGithub, } from "react-icons/fa";

const inputValue = (value, setValue, type, text) => {	
	return (
		<input className='input_item' value={value} type={type} placeholder={text} onChange={e => setValue(e.target.value)}/>
	)
}

function Login(props){
	const [eye, setEye] = useState(true)
	const [user, setUser] = useState()
	const [password, setPassword] = useState();
	const type = eye ? 'password' : 'text';
	const handlerLogin = (props) => {
		props= {username: user, password: password}
		console.log(props);
		setUser('');
		setPassword('')
	}

	return (
		<div className='modal'>
			<div className="from_login">
				<div className='header__logo'>
					<img className='header__img' src={logo} alt='logo'/>
				</div>
				<p className='login_text'>Đăng nhập vào AnPhuGas</p>
				<div className='from_login_item'>
					<div className='input_login'>
						<div className='input_login_logo'>
							<FaUser/>
						</div>
						<div className='row input_login_input'>
							{inputValue(user, setUser, 'text', 'username')}
						</div>
					</div>
					<div className='input_login'>
						<div className='input_login_logo'>
							<FaLock/>
						</div>
						<div className='row input_login_input'>
							{inputValue(password, setPassword, type, 'password')}							
							<button className='btn_eye' onClick={() =>{setEye(!eye)}}>
								{eye ? <FaEyeSlash /> : <FaEye />}
							</button>
						</div>
					</div>
					<button className='btn ' onClick={handlerLogin}>Đăng Nhập</button>
					
				</div>
				<div className='row login_tk'>
					<p>Quên mật khẩu?</p>
					<NavLink to="/Register"><p>Tạo tài khoản?</p></NavLink>
				</div>
				<div className='login_bang'>
					<p>Đăng nhập bằng</p>
					<ul className='row'>
						<li ><FaFacebookF style={{color:'blue', paddingRight:5}}/> Facebook</li>
						<li><FaGoogle style={{color:"red",paddingRight:5}}/>  Google</li>
						<li><FaGithub style={{color:"green",paddingRight:5}}/>  Github</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Login;