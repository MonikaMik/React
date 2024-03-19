import styled from 'styled-components';
import CardsContext from '../../contexts/CardsContext';
import { CardsActionTypes } from '../../contexts/CardsContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import { useNavigate } from 'react-router-dom';
import Comment from '../UI/Comment';

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
	return (
		<StyledSection>
			{card ? (
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
						{card.comments?.map(comment => {
							<Comment key={comment.id} comment={comment} />;
						})}
					</div>
					{loggedInUser && <form></form>}
				</>
			) : (
				<div>Loading...</div>
			)}
		</StyledSection>
	);
};
export default OneCard;
