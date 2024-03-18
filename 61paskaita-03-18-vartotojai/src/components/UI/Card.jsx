import styled from 'styled-components';

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
	return (
		<StyledCard>
			<h3>{card.title}</h3>
			<p>{card.description}</p>
		</StyledCard>
	);
};
export default Card;
