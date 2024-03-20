import styled from 'styled-components';
import CardsContext from '../../contexts/CardsContext';
import { CardsActionTypes } from '../../contexts/CardsContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import { useNavigate } from 'react-router-dom';
import Comment from '../UI/Comment';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const StyledSection = styled.section`
	padding-top: 2rem;
	width: 80%;
	margin: 0 auto;
	> div {
		border: 5px double salmon;
		padding: 10px 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		> h3 {
			margin: 0;
		}
		> p {
			text-align: justify;
			margin: 0 auto;
			margin: 0;
		}
		> button {
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
`;

const OneCard = () => {
	const { cards, dispatch } = useContext(CardsContext);
	const { loggedInUser } = useContext(UsersContext);
	const { id } = useParams();

	const card = cards.find(card => card.id === id);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			text: ''
		},
		validationSchema: Yup.object({
			text: Yup.string()
				.min(5, 'Comment must be at least 5 symbols length')
				.max(50, 'Comment cannot be longer than 50 symbols')
				.required('Comment is required')
				.trim()
		}),
		onSubmit: values => {
			const newComment = {
				id: uuidv4(),
				text: values.text,
				authorId: loggedInUser.id
			};
			dispatch({
				type: CardsActionTypes.ADD_COMMENT,
				payload: { cardId: card.id, newComment }
			});
			formik.resetForm();
		}
	});

	return (
		<StyledSection>
			{cards.length ? (
				<>
					<div>
						<h3>{card.title}</h3>
						<p>{card.description}</p>
						{loggedInUser.id === card.userId && (
							<button
								onClick={() => {
									dispatch({
										type: CardsActionTypes.DELETE_CARD,
										payload: card.id
									});
									navigate(-1);
								}}
							>
								Delete
							</button>
						)}
					</div>
					<div>
						{card.comments?.map(comment => (
							<Comment key={comment.id} comment={comment} id={card.id} />
						))}
					</div>
					{loggedInUser && (
						<form onSubmit={formik.handleSubmit}>
							<div>
								<label htmlFor='text'>Comment: </label>
								<textarea
									name='text'
									id='text'
									placeholder='enter comment...'
									value={formik.values.text}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.text && formik.errors.text ? (
									<p>{formik.errors.text}</p>
								) : null}
							</div>
							<input type='submit' value='Add Comment' />
						</form>
					)}
				</>
			) : (
				<div>Loading...</div>
			)}
		</StyledSection>
	);
};
export default OneCard;
