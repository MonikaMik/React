import styled from 'styled-components';

const StyledSubheading = styled.p`
	font-size: 0.9rem;
	margin: 0;
	margin-bottom: -0.5rem;
`;

const Subheading = ({ text }) => {
	return <StyledSubheading>{text.toUpperCase()}</StyledSubheading>;
};
export default Subheading;
