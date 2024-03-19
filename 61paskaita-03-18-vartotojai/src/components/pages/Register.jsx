import { useFormik } from 'formik';
import * as Yup from 'yup';
import UsersContext from '../../contexts/UsersContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
		width: 30rem;
		> div {
			display: grid;
			grid-template-columns: 1fr 2fr;
			/* gap: 10px; */
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

const Register = () => {
	const [sameNameError, setSameNameError] = useState(false);
	const { users, addUser, setLoggedInUser } = useContext(UsersContext);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			passwordRepeat: ''
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.min(4, 'Username must be at least 4 symbols long')
				.max(20, 'Username must be at most 20 symbols long')
				.required('Username is required')
				.trim(),
			password: Yup.string()
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
					'Password must be at least: one lower case, one upper case, one number, one special symbol and length to be between 8 and 25 symbols'
				)
				.required('Password is required')
				.trim(),
			passwordRepeat: Yup.string()
				.required('Password repeat is required')
				.oneOf([Yup.ref('password')], 'Passwords must match')
		}),
		onSubmit: values => {
			const sameError = users.find(user => user.username === values.username);
			if (sameError) {
				setSameNameError(true);
				return;
			}
			setSameNameError(false);
			const newUser = {
				id: uuidv4(),
				username: values.username,
				password: bcrypt.hashSync(values.password, 10),
				passwordNoHash: values.password,
				role: 'user'
			};
			addUser(newUser);
			setLoggedInUser(newUser);
			navigate('/');
		}
	});

	return (
		<StyledSection>
			<h1>Register</h1>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						id='username'
						name='username'
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

				<div>
					<label htmlFor='passwordRepeat'>Password repeat: </label>
					<input
						type='password'
						id='passwordRepeat'
						name='passwordRepeat'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.passwordRepeat}
					/>
					{formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
						<p>{formik.errors.passwordRepeat}</p>
					) : null}
				</div>
				<input type='submit' value='Register' />
			</form>
			{sameNameError ? <p>Username already exists</p> : null}
		</StyledSection>
	);
};
export default Register;
