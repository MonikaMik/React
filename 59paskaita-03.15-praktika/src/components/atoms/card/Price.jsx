import styled from 'styled-components';

const StyledPrice = styled.span`
	font-size: 1.2rem;
`;

const Price = ({ price }) => {
	return <StyledPrice>{price}&euro;</StyledPrice>;
};
export default Price;
