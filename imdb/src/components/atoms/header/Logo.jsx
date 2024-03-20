import styled from 'styled-components';

const StyledLogo = styled.img`
	height: 35px;
`;

const Logo = ({ imageSrc, title }) => {
	return <StyledLogo src={imageSrc} alt={title} />;
};
export default Logo;
