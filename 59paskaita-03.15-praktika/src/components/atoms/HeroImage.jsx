import styled from 'styled-components';

const StyledHeroImage = styled.img`
	width: 10rem;
	height: auto;
	object-fit: cover;
	object-position: center;
`;

const HeroImage = ({ heroImage, title }) => {
	return <StyledHeroImage src={heroImage} alt={title} />;
};

export default HeroImage;
