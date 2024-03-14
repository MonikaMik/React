import { useFormik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h1 {
		font-size: 2.5rem;
	}
	> form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 30rem;
		> input {
			width: 20%;
			align-self: center;
		}
		> div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
			> input,
			> select {
				padding: 0.2rem 0.5rem;
			}
			> label,
			> p {
				text-align: right;
			}
			> p {
				margin: 0;
			}
			> div {
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
			> span {
				color: red;
			}
		}
	}
`;

const Register = () => {
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			passwordRepeat: '',
			avatarURL: '',
			age: '',
			gender: '',
			language: ''
		},
		onSubmit: values => {
			const newUser = {
				...values,
				avatarURL: values.avatarURL
					? values.avatarURL
					: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
			};
			console.log(newUser);
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.min(4, 'Username must be at least 4 symbols long')
				.max(20, 'Username can be up to 20 symbols')
				.required('Required')
				.trim(),
			email: Yup.string()
				.email('Field be must be a valid email')
				.required('Required')
				.trim(),

			avatarURL: Yup.string()
				.url('Field must be a valid url')
				// .test(
				// 	'ends-with-png',
				// 	'URL must end with .png',
				// 	value => value?.endsWith('.png') || value?.endsWith('.jpg')
				// )
				.trim(),
			age: Yup.number()
				.min(18, 'Must be at least 18 years old')
				.integer('Age must be an integer')
				.required('Required'),
			gender: Yup.string().required('Required'),
			language: Yup.string().required('Required'),
			password: Yup.string()
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
					'Password must be at least: one lower case, one upper case, one number, one special symbol and length to be between 8 and 25 symbols'
				)
				.required('Required')
				.trim(),
			passwordRepeat: Yup.string()
				.oneOf([Yup.ref('password')], 'Passwords must match')
				.required('Required')
				.trim()
		})
	});

	return (
		<StyledSection>
			<h1>Register</h1>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						name='username'
						id='username'
						placeholder='username...'
						value={formik.values.username}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.touched.username && formik.errors.username && (
						<span>{formik.errors.username}</span>
					)}
				</div>
				<div>
					<label htmlFor='email'>Email: </label>
					<input
						type='text'
						name='email'
						id='email'
						placeholder='email...'
						value={formik.values.email}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.touched.email && formik.errors.email && (
						<span>{formik.errors.email}</span>
					)}
				</div>
				<div>
					<label htmlFor='password'>Password: </label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='password'
						value={formik.values.password}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.touched.password && formik.errors.password && (
						<span>{formik.errors.password}</span>
					)}
				</div>
				<div>
					<label htmlFor='passwordRepeat'>Repeat password: </label>
					<input
						type='password'
						name='passwordRepeat'
						id='passwordRepeat'
						placeholder='passwordRepeat'
						value={formik.values.passwordRepeat}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.touched.passwordRepeat && formik.errors.passwordRepeat && (
						<span>{formik.errors.passwordRepeat}</span>
					)}
				</div>
				<div>
					<label htmlFor='avatarURL'>Avatar URL: </label>
					<input
						type='url'
						name='avatarURL'
						id='avatarURL'
						placeholder='avatarURL'
						value={formik.values.avatarURL}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.touched.avatarURL && formik.errors.avatarURL && (
						<span>{formik.errors.avatarURL}</span>
					)}
				</div>
				<div>
					<label htmlFor='age'>Age: </label>
					<input
						type='number'
						name='age'
						id='age'
						step={1}
						placeholder='age'
						value={formik.values.age}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.touched.age && formik.errors.age && (
						<span>{formik.errors.age}</span>
					)}
				</div>

				<div>
					<p>Gender: </p>
					<div>
						<label>
							<input
								type='radio'
								name='gender'
								value='woman'
								checked={formik.values.gender === 'woman'}
								onChange={formik.handleChange}
							/>
							Woman
						</label>
						<label>
							<input
								type='radio'
								name='gender'
								value='man'
								checked={formik.values.gender === 'man'}
								onChange={formik.handleChange}
							/>
							Man
						</label>
						{formik.touched.gender && formik.errors.gender && (
							<span>{formik.errors.gender}</span>
						)}
					</div>
				</div>
				<div>
					<label htmlFor='language'>Select language: </label>
					<select
						name='language'
						id='language'
						value={formik.values.language}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					>
						<option value='' disabled></option>
						<option value='english'>English</option>
						<option value='lithuanian'>Lithuanian</option>
						<option value='russian'>Russian</option>
						<option value='german'>German</option>
					</select>
					{formik.touched.language && formik.errors.language && (
						<span>{formik.errors.language}</span>
					)}
				</div>
				<input type='submit' value='Register' />
			</form>
		</StyledSection>
	);
};
export default Register;
