import { useContext } from 'react';
import CardsContext from '../../contexts/CardsContext';
import Card from '../UI/Card';
import styled from 'styled-components';

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
`;

const Cards = () => {
	const { cards } = useContext(CardsContext);

	return (
		<StyledSection>
			<h1>All our cards</h1>
			<div>
				{cards.map(card => (
					<Card key={card.id} card={card} />
				))}
			</div>
		</StyledSection>
	);
};
export default Cards;
