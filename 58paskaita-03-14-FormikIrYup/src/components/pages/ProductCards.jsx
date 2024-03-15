import ProductContext from '../contexts/ProductContext';
import { useContext } from 'react';
import ProductCard from '../UI/ProductCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductSection = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	margin-top: 2rem;
`;

const ProductCards = () => {
	const { products } = useContext(ProductContext);

	return (
		<>
			<Link to='add'> Add new Product </Link>
			<ProductSection>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</ProductSection>
		</>
	);
};
export default ProductCards;
