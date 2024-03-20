import styled from 'styled-components';

const StyledCardTitle = styled.h4`
	font-size: 1.1rem;
	margin: 0;
`;

const CardTitle = ({ text }) => {
	return <StyledCardTitle>{text}</StyledCardTitle>;
};
export default CardTitle;
