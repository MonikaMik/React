import Image from '../atoms/card/Image';
import SaleTag from '../atoms/card/SaleTag';
import styled from 'styled-components';

const StyledCardImage = styled.div`
	position: relative;
`;
const CardImage = ({ image, title, salePrice }) => {
	return (
		<StyledCardImage>
			<Image image={image} title={title} />
			{salePrice > 0 && <SaleTag />}
		</StyledCardImage>
	);
};
export default CardImage;
