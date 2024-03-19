import { useContext } from 'react';
import CardsContext from '../../contexts/CardsContext';
import Card from '../UI/Card';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import UsersContext from '../../contexts/UsersContext';

const StyledSection = styled.section`
	> h1 {
		text-align: center;
	}
	> div {
		margin: 0 auto;
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	> p {
		text-align: center;
		margin-bottom: 2rem;
	}
	> p > a {
		text-decoration: none;
		color: black;
		border: 1px solid black;
		border-radius: 5px;
		padding: 5px;
		transition: 0.3s;
		&:hover {
			background-color: pink;
			box-shadow: 2px 2px 5px black;
		}
	}
`;

const UserPage = () => {
	const { cards } = useContext(CardsContext);
	const location = useLocation();
	const { loggedInUser } = useContext(UsersContext);

	const filteredCards = cards.filter(card => card.userId === loggedInUser.id);

	return (
		<StyledSection>
			<h1>All {loggedInUser.username} cards</h1>
			<p>
				<Link to='/cards/addNew'>Add new card</Link>
			</p>

			{filteredCards.length ? (
				filteredCards.map(card => (
					<div>
						<Card key={card.id} card={card} location={location} />
					</div>
				))
			) : (
				<p>No cards yet...</p>
			)}
		</StyledSection>
	);
};
export default UserPage;
