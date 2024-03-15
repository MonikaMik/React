import styled from 'styled-components';

const StyledPrice = styled.span`
	color: ${props => (props.onSale > 0 ? '#999999' : 'var(--primary-color)')};
	text-decoration: ${props => (props.onSale > 0 ? 'line-through' : 'none')};
	font-size: 1.2rem;
`;

const OldPrice = ({ oldPrice, onSale }) => {
	return <StyledPrice onSale={onSale}>{oldPrice}&euro;</StyledPrice>;
};
export default OldPrice;
