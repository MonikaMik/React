import { useContext } from 'react';
import CardsContext from '../../contexts/CardsContext';
import Card from '../UI/Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const Cards = () => {
	const { cards } = useContext(CardsContext);
	const { loggedInUser } = useContext(UsersContext);

	return (
		<StyledSection>
			<h1>All our cards</h1>
			{loggedInUser && (
				<p>
					<Link to='/cards/addNew'>Add new card</Link>
				</p>
			)}
			<div>
				{cards.map(card => (
					<Card key={card.id} card={card} />
				))}
			</div>
		</StyledSection>
	);
};
export default Cards;
