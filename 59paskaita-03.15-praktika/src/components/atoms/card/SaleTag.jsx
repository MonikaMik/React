import styled from 'styled-components';

const StyledSaleTag = styled.span`
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	color: white;
	background-color: var(--important-color);
	padding: 0.2rem 0.5rem;
	border-radius: 5px;
`;

const SaleTag = () => {
	return <StyledSaleTag>Sale</StyledSaleTag>;
};
export default SaleTag;
