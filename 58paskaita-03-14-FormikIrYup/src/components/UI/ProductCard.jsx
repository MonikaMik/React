import styled from 'styled-components';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const StyledCard = styled.div`
	background-color: #d4e6ed;
	padding: 0.8rem;
	width: 300px;
	color: #05455b;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	> img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	> div {
		display: flex;
		justify-content: space-between;
		> p {
			font-size: 1.2rem;
			letter-spacing: 2px;
		}
		> .price {
			color: #fc5500;
		}
	}
	> p {
		margin-top: 0;
		font-weight: 300;
		letter-spacing: 1px;
		font-size: 0.9rem;
	}
	> button {
		border: 1px solid #05455b;
		background-color: transparent;
		color: #05455b;
		padding: 1rem;
		letter-spacing: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		&:hover {
			background-color: #05465b30;
			cursor: pointer;
		}
	}
`;

const ProductCard = ({ product }) => {
	return (
		<StyledCard>
			<img src={product.image} alt={product.name} />
			<div>
				<p>{product.name.toUpperCase()}</p>
				<p className='price'>&euro; {product.price}</p>
			</div>
			<p>{product.description}</p>
			<button>
				<AddShoppingCartIcon />
				ADD TO CART
			</button>
		</StyledCard>
	);
};
export default ProductCard;
