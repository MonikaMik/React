import { useContext } from 'react';
import UserContext, { userActionTypes } from '../../../contexts/UserContext';
import LoginFormContext, {
	inputActionTypes
} from '../../../contexts/LoginFormContext';
import styled from 'styled-components';

const ErrorMessage = styled.span`
	color: red;
	margin-bottom: 0;
`;

const LoginForm = ({ hideLoginForm }) => {
	const { userState, login, dispatch: userDispatch } = useContext(UserContext);
	const { loginFormInputs, handleChange, dispatch } =
		useContext(LoginFormContext);

	const handleLogin = async e => {
		e.preventDefault();
		const loginSuccess = await login(
			loginFormInputs.username,
			loginFormInputs.password
		);

		if (loginSuccess) {
			dispatch({ type: inputActionTypes.CLEAR_FORM });
			hideLoginForm();
		}
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
				<ErrorMessage>{userState.errorMessage}</ErrorMessage>
				<input type='submit' value='Log in' />
			</form>
			<i
				className='far fa-times-circle'
				onClick={() => {
					dispatch({ type: inputActionTypes.CLEAR_FORM });
					userDispatch({ type: userActionTypes.SET_ERROR, payload: '' });
					hideLoginForm();
				}}
			></i>
		</div>
	);
};

export default LoginForm;
