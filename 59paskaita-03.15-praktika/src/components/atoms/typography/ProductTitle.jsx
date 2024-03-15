import styled from 'styled-components';

const StyledProductTitle = styled.h4`
	font-size: 1.5rem;
	margin-top: 0.5rem;
	margin-bottom: 0;
`;

const ProductTitle = ({ text }) => {
	return <StyledProductTitle>{text}</StyledProductTitle>;
};
export default ProductTitle;
