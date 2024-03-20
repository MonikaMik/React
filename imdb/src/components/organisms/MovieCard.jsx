import CardImage from '../molecules/CardImage';
import Paragraph from '../atoms/typography/Paragraph';
import Button from '../atoms/Button';
import CardTitle from '../atoms/typography/CardTitle';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import { Link } from 'react-router-dom';
import CardInfo from '../molecules/CardInfo';

const StyledMovieCard = styled.article`
	background-color: var(--card-body);
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	width: 200px;
`;

const MovieCard = ({ movie }) => {
	return (
		<StyledMovieCard>
			<CardImage image={movie.photos.poster[0]} title={movie.title} />
			<CardInfo movie={movie} />
		</StyledMovieCard>
	);
};
export default MovieCard;
