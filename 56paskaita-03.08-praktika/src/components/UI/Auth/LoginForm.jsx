import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import LoginFormContext, {
	inputActionTypes
} from '../../../contexts/LoginFormContext';

const LoginForm = ({ hideLoginForm }) => {
	const { login } = useContext(UserContext);
	const { loginFormInputs, handleChange, dispatch } =
		useContext(LoginFormContext);

	const handleLogin = e => {
		e.preventDefault();
		login(loginFormInputs.username, loginFormInputs.password);
		dispatch({ type: inputActionTypes.CLEAR_FORM });
		hideLoginForm();
	};

	return (
		<div>
			<form onSubmit={e => handleLogin(e)}>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='username...'
					value={loginFormInputs.username}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='password...'
					value={loginFormInputs.password}
					onChange={handleChange}
					required
				/>
				<input type='submit' value='Log in' />
			</form>
			<i className='far fa-times-circle' onClick={hideLoginForm}></i>
		</div>
	);
};

export default LoginForm;
