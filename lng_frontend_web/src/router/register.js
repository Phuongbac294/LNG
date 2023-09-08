import {useNavigate} from 'react-router-dom'

const Register = () => {
	
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => {navigate("/Home")}}> Register </button>
		</div>
	)
}

export default Register;