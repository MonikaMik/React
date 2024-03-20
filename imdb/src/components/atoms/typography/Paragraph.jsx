import styled from 'styled-components';

const StyledParagraph = styled.p`
	line-height: 1.8;
	font-size: 1rem;
	font-weight: 100;
	letter-spacing: 0.5px;
`;

const Paragraph = ({ text }) => {
	return <StyledParagraph>{text}</StyledParagraph>;
};
export default Paragraph;
