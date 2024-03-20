import styled from 'styled-components';

const StyledParagraph = styled.p`
	line-height: 1.8;
	font-size: 1rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	margin: 0;
`;

const BoldText = ({ text }) => {
	return <StyledParagraph>{text}</StyledParagraph>;
};
export default BoldText;
