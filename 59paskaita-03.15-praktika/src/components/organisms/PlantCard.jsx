import CardImage from '../molecules/CardImage';
import Price from '../atoms/card/Price';
import OldPrice from '../atoms/card/OldPrice';
import Paragraph from '../atoms/typography/Paragraph';
import Button from '../atoms/Button';
import ProductTitle from '../atoms/typography/ProductTitle';
import styled from 'styled-components';
import Icon from '../atoms/Icon';

const StyledPlantCard = styled.article`
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	padding: 15px;
	width: 280px;
	position: relative;
	> i {
		position: absolute;
		right: 16px;
		bottom: 16px;
		&:hover {
			color: var(--important-color);
			scale: 1.1;
			cursor: pointer;
		}
	}
`;
const PriceContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 0.5rem;
`;

const PlantCard = ({ plant }) => {
	return (
		<StyledPlantCard>
			<CardImage
				image={plant.pictureUrl}
				title={plant.name}
				salePrice={plant.salePrice}
			/>
			<ProductTitle text={plant.name} />
			<Paragraph text={plant.description} />
			<PriceContainer>
				{plant.salePrice > 0 && <Price price={plant.salePrice} />}
				<OldPrice oldPrice={plant.price} onSale={plant.salePrice} />
			</PriceContainer>
			<Button text='Add to cart' />
			<Icon iconClass={'bi bi-info-circle'} />
		</StyledPlantCard>
	);
};
export default PlantCard;
