import React from 'react';
// import {useNavigate} from 'react-router-dom';
import logo from '../img/logo-AP-removebg-preview.png';
import '../css/base.css';
import '../css/header.css';
import '../css/login.css';

import { FaUser, FaLock, FaEyeSlash, FaEye, FaFacebookF, FaGoogle, FaGithub, } from "react-icons/fa";

// const inputValue = (value, e) => {

// 	return (
// 		<div>
// 			<input type="text" value={value} onChange={e => setValue(e)} />
// 		</div>
// 	)
// }

function Login(props){
	const [eye, setEye] = React.useState(true)
	// const navigate = useNavigate();

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
							<input type='text' className='input_item' placeholder='Username'/>
						</div>
					</div>
					<div className='input_login'>
						<div className='input_login_logo'>
							<FaLock/>
						</div>
						<div className='row input_login_input'>
							<input type='text' className='input_item' placeholder='Password'/>
							{eye ? <FaEyeSlash onChange={e=>setEye(!eye)}/> : <FaEye onChange={e=>setEye(!eye)}/>}						
							
						</div>
					</div>
					<button className='btn btn-login'>Đăng Nhập</button>
				</div>
				<div className='row'>
					<p>Quên mật khẩu?</p>
					<p>Tạo tài khoản</p>
				</div>
				<div>
					<p>Đăng nhập bằng</p>
					<ul className='row'>
						<li><FaFacebookF/> Facebook</li>
						<li><FaGoogle/> Google</li>
						<li><FaGithub/> Github</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Login;