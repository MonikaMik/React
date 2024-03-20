import styled from 'styled-components';

const StyledCardImage = styled.img`
	width: 100%;
	height: 280px;
	object-fit: cover;
`;

const CardImage = ({ image, title }) => {
	return <StyledCardImage src={image} alt={title} />;
};
export default CardImage;
