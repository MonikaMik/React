import { useFormik } from 'formik';
import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import { CardsActionTypes } from '../../contexts/CardsContext';
import CardsContext from '../../contexts/CardsContext';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

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
		width: 30rem;
		gap: 1rem;
		> div {
			display: grid;
			grid-template-columns: 1fr 2fr;

			> label {
				align-self: center;
			}
			> input,
			> textarea {
				min-width: 14rem;
				border-radius: 5px;
				border: 1px solid #ccc;
				padding: 0.2rem 0.5rem;
			}
			> textarea {
				height: 5lh;
			}
			> p {
				text-align: center;
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

const AddNewCard = () => {
	const { loggedInUser } = useContext(UsersContext);
	const { dispatch } = useContext(CardsContext);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			title: '',
			description: ''
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.min(5, 'Title must be at least 5 symbols length')
				.max(50, 'Title cannot be longer than 50 symbols')
				.required('Title is required'),
			description: Yup.string()
				.min(5, 'Description must be at least 5 symbols length')
				.max(500, 'Description cannot be longer than 500 symbols')
				.required('Description is required')
		}),
		onSubmit: values => {
			const newCard = {
				id: uuidv4(),
				userId: loggedInUser.id,
				...values
			};
			dispatch({ type: CardsActionTypes.ADD_CARD, payload: newCard });
			navigate(-1);
		}
	});

	return (
		<StyledSection>
			<h1>Add a new card</h1>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor='title'>Title: </label>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='enter title...'
						value={formik.values.title}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.title && formik.errors.title ? (
						<p>{formik.errors.title}</p>
					) : null}
				</div>
				<div>
					<label htmlFor='description'>Description: </label>
					<textarea
						type='text'
						name='description'
						id='description'
						placeholder='enter description...'
						value={formik.values.description}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					></textarea>
					{formik.touched.description && formik.errors.description ? (
						<p>{formik.errors.description}</p>
					) : null}
				</div>
				<input type='submit' value='Submit' />
			</form>
		</StyledSection>
	);
};
export default AddNewCard;
