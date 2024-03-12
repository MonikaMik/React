import { useContext, useState } from 'react';
import UsersFormInputsContext from '../../contexts/UsersFormInputsContext';
import UsersContext from '../../contexts/UsersContext';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [diffPassError, setDiffPassError] = useState(false);
	const { formInputs, onChangeF, clearForm } = useContext(
		UsersFormInputsContext
	);
	const { registerUser } = useContext(UsersContext);
	const navigate = useNavigate();

	const formSubmit = e => {
		e.preventDefault();

		if (formInputs.password !== formInputs.passwordRepeat) {
			setDiffPassError(true);
			return;
		}

		const newUser = {
			id: uuid(),
			username: formInputs.username,
			email: formInputs.email,
			password: formInputs.password
		};
		registerUser(newUser);
		clearForm();
		navigate('/');
	};

	return (
		<section>
			<h1>Register</h1>
			<form onSubmit={formSubmit}>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='username...'
					value={formInputs.username}
					onChange={onChangeF}
				/>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='email...'
					value={formInputs.email}
					onChange={onChangeF}
				/>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='password...'
					value={formInputs.password}
					onChange={onChangeF}
				/>
				<input
					type='password'
					name='passwordRepeat'
					id='passwordRepeat'
					placeholder='passwordRepeat...'
					value={formInputs.passwordRepeat}
					onChange={onChangeF}
				/>
				<input type='submit' value='Register' />
			</form>
			{diffPassError && <p>Passwords do not match</p>}
		</section>
	);
};
export default Register;
