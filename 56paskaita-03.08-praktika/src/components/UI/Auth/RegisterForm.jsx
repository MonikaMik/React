import RegisterFormContext, {
	inputActionTypes
} from '../../../contexts/RegisterFormContext';
import { useContext } from 'react';
import UserContext, { userActionTypes } from '../../../contexts/UserContext';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import styled from 'styled-components';

const ErrorMessage = styled.span`
	color: red;
	margin-bottom: 0;
`;

const RegisterForm = ({ hideLoginForm }) => {
	const {
		userState,
		register,
		dispatch: userDispatch
	} = useContext(UserContext);
	const { registerFormInputs, handleChange, dispatch } =
		useContext(RegisterFormContext);

	const handleRegistration = async e => {
		e.preventDefault();

		if (registerFormInputs.password !== registerFormInputs.passwordRepeat) {
			userDispatch({
				type: userActionTypes.SET_ERROR,
				payload: 'Passwords do not match. Please try again.'
			});
			return;
		}

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(registerFormInputs.password, salt);

		const user = {
			id: uuid(),
			name: registerFormInputs.username,
			password: hashedPassword,
			email: registerFormInputs.email,
			avatar: registerFormInputs.avatar
		};

		const registrationSuccess = await register(user);

		if (registrationSuccess) {
			dispatch({ type: inputActionTypes.CLEAR_FORM });
			hideLoginForm();
		}
	};
	return (
		<div>
			<form onSubmit={e => handleRegistration(e)}>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='username...'
					value={registerFormInputs.username}
					onChange={handleChange}
					required
				/>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='email...'
					value={registerFormInputs.email}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='password...'
					value={registerFormInputs.password}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='passwordRepeat'
					id='passwordRepeat'
					placeholder='repeat password...'
					value={registerFormInputs.passwordRepeat}
					onChange={handleChange}
					required
				/>
				<input
					type='url'
					name='avatar'
					id='avatar'
					placeholder='enter url for your avatar...'
					value={registerFormInputs.avatar}
					onChange={handleChange}
					required
				/>
				<ErrorMessage>{userState.errorMessage}</ErrorMessage>
				<input type='submit' value='Register' />
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

export default RegisterForm;
