import { useContext, useState } from 'react';
import UsersFormInputsContext from '../../contexts/UsersFormInputsContext';
import UsersContext from '../../contexts/UsersContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [failedToLogin, setFailedToLogin] = useState(false);
	const { formInputs, onChangeF, clearForm } = useContext(
		UsersFormInputsContext
	);
	const { users, login } = useContext(UsersContext);
	const navigate = useNavigate();

	const formSubmit = e => {
		e.preventDefault();

		const user = users.find(user => user.username === formInputs.username);
		if (!user) {
			setFailedToLogin(true);
			return;
		} else if (user.password === formInputs.password) {
			login(user);
			clearForm();
			navigate('/');
		} else {
			setFailedToLogin(true);
			return;
		}
	};

	return (
		<section>
			<h1>Log in</h1>
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
					type='password'
					name='password'
					id='password'
					placeholder='password...'
					value={formInputs.password}
					onChange={onChangeF}
				/>
				<input type='submit' value='Login' />
			</form>
			{failedToLogin && <p>Username or password incorrect</p>}
		</section>
	);
};
export default Login;
