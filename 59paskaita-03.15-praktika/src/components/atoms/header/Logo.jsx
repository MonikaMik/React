import styled from 'styled-components';

const StyledLogo = styled.img`
	height: 100px;
`;

const Logo = ({ imageSrc, title }) => {
	return <img src={imageSrc} alt={title} />;
};
export default Logo;
