import React from 'react';
import { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import logo from '../img/logo-AP-removebg-preview.png';
import '../css/base.css';
import '../css/header.css';
import '../css/login.css';

import { FaUser, FaLock, FaEyeSlash, FaEye} from "react-icons/fa";

const inputValue = (value, setValue, type, text) => {	
	return (
		<input className='input_item' value={value} type={type} placeholder={text} onChange={e => setValue(e.target.value)}/>
	)
}

function Register(props){
	const [eye, setEye] = useState(true)
	const [user, setUser] = useState()
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [checkpass, setCheckPass] = useState(false)
	const type = eye ? 'password' : 'text';

	const handlerRegister = (props) => {
		if (password !== confirmPassword) {
			return setCheckPass(true)
		} else {
			props= {username: user, password: password}
		}
		setUser('');
		setPassword('')
		setCheckPass(false)
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
					<div className='input_login'>
						<div className='input_login_logo'>
							<FaLock/>
						</div>
						<div className='row input_login_input'>
							{inputValue(confirmPassword, setConfirmPassword, type, 'ConfirmPassword')}							
							<button className='btn_eye' onClick={() =>{setEye(!eye)}}>
								{eye ? <FaEyeSlash /> : <FaEye />}
							</button>
						</div>
					</div>
					{checkpass ? <p>Sai password</p> : <></>}
					<button className='btn ' onClick={handlerRegister}>Đăng Nhập</button>
					
				</div>
				
			</div>
		</div>
	)
}

export default Register;