import styled from 'styled-components';

const StyledFaintText = styled.p`
	color: ${props => props.theme.faintText};
`;

const FaintText = ({ text }) => {
	return <StyledFaintText>{text}</StyledFaintText>;
};
export default FaintText;
