import styled from 'styled-components';

const StyledPrimaryTitle = styled.h1`
	font-size: 3.5rem;
`;

const PrimaryTitle = ({ text }) => (
	<StyledPrimaryTitle>{text}</StyledPrimaryTitle>
);

export default PrimaryTitle;
