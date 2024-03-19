import styled from 'styled-components';
import CardsContext from '../../contexts/CardsContext';
import { CardsActionTypes } from '../../contexts/CardsContext';
import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
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
`;

const Card = ({ card, location }) => {
	const { dispatch } = useContext(CardsContext);
	const { loggedInUser } = useContext(UsersContext);

	return (
		<StyledCard>
			<h3>{card.title}</h3>
			<p>{card.description}</p>
			<Link to={`/cards/${card.id}`}>More info</Link>
			{location.pathname !== '/cards/allCards' &&
				loggedInUser.id === card.userId && (
					<button
						onClick={() => {
							dispatch({
								type: CardsActionTypes.DELETE_CARD,
								payload: card.id
							});
						}}
					>
						Delete
					</button>
				)}
		</StyledCard>
	);
};
export default Card;
