import styled from 'styled-components';
import CardsContext from '../../contexts/CardsContext';
import { CardsActionTypes } from '../../contexts/CardsContext';
import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';

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
`;

const Card = ({ card }) => {
	const { dispatch } = useContext(CardsContext);
	const { loggedInUser } = useContext(UsersContext);
	return (
		<StyledCard>
			<h3>{card.title}</h3>
			<p>{card.description}</p>
			{loggedInUser.id === card.userId && (
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
