import UsersContext from '../../contexts/UsersContext';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import styled from 'styled-components';
import bcrypt from 'bcryptjs';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 70px;
	> h1 {
		font-size: 3rem;
	}
	> form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		> div {
			display: grid;
			grid-template-columns: 1fr 2fr;

			> label {
				align-self: center;
			}
			> input {
				min-width: 14rem;
				border-radius: 5px;
				border: 1px solid #ccc;
				padding: 0.2rem 0.5rem;
			}
			> p {
				grid-column: span 3;
				color: red;
			}
		}
		> input[type='submit'] {
			grid-column: span 2;
			background-color: #ff4f6c;
			color: white;
			border: none;
			padding: 5px 10px;
			border-radius: 5px;
			cursor: pointer;
			&:hover {
				background-color: #d000c6;
			}
		}
	}
	> p {
		color: red;
	}
`;

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
					user.username === values.username &&
					bcrypt.compareSync(values.password, user.password)
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
		<StyledSection>
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
		</StyledSection>
	);
};
export default Login;
