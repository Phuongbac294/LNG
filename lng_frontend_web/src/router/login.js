import {useNavigate} from 'react-router-dom'

const Login = () => {
	
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => {navigate("/Home")}}> Login </button>
		</div>
	)
}

export default Login;