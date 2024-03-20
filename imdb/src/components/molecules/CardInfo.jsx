import Button from '../atoms/Button';
import CardTitle from '../atoms/typography/CardTitle';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import BoldText from '../atoms/typography/BoldText';
import FaintText from '../atoms/typography/FaintText';

const StyledCardInfo = styled.div`
	display: grid;
	grid-template: repeat(4, 1fr) / 1fr 1fr 1fr;
	padding-inline: 0.5rem;
	> h4,
	button {
		grid-column: span 3;
	}
	> button {
		align-self: center;
	}
	> div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	> .bi-star {
		place-self: center start;
	}
	> .bi-info-circle {
		grid-column: 3;
		align-self: center;
	}
`;

const CardInfo = ({ movie }) => {
	return (
		<StyledCardInfo>
			<div>
				<Icon iconClass={'bi bi-star-fill'} color='accentYellow' size='small' />
				<FaintText text={movie.IMDB.totalScore} />
			</div>
			<Icon iconClass={'bi bi-star'} color='accentBlue' size='small' />
			<CardTitle text={movie.title} />
			<Button text='+ Watchlist' />
			<div>
				<Icon iconClass={'bi bi-play-fill'} color='text' size='medium' />
				<BoldText text='Trailer' />
			</div>
			<Icon iconClass={'bi bi-info-circle'} color='text' size='medium' />
		</StyledCardInfo>
	);
};
export default CardInfo;
