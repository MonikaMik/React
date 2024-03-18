import { UsersContext } from '../../contexts/UsersContext';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
	const { users, setUsers, setLoggedInUser } = useContext(UsersContext);
	const [wrongCredentials, setWrongCredentials] = useState(false);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema: Yup.object({
			username: Yup.string().required('Username is required').trim(),
			password: Yup.string().required('Password is required').trim()
		}),
		onSubmit: values => {
			setWrongCredentials(true);
			const user = users.find(
				user =>
					user.username === values.username && user.password === values.password
			);
			if (user === undefined) {
				setWrongCredentials(true);
			} else {
				setWrongCredentials(false);
				setLoggedInUser(user);
				navigate('/');
			}
		}
	});

	return (
		<section>
			<h1>Login</h1>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						name='username'
						id='username'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
					/>
					{formik.touched.username && formik.errors.username ? (
						<p>{formik.errors.username}</p>
					) : null}
				</div>
				<div>
					<label htmlFor='password'>Password: </label>
					<input
						type='password'
						id='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? (
						<p>{formik.errors.password}</p>
					) : null}
				</div>
				<input type='submit' value='Log In' />
			</form>
			{wrongCredentials && <p>Wrong credentials</p>}
		</section>
	);
};
export default Login;
