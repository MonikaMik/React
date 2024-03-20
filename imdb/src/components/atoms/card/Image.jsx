import styled from 'styled-components';

const CardImage = styled.img`
	height: 250px;
	width: 100%;
	object-fit: cover;
	border-radius: 10px;
`;

const Image = ({ image, title }) => {
	return <CardImage src={image} alt={title} />;
};
export default Image;
