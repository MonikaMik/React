import { useContext } from 'react';
import PlantContext from '../../contexts/PlantContext';
import PlantCard from '../organisms/PlantCard';
import SecondaryTitle from '../atoms/typography/SecondaryTitle';
import styled from 'styled-components';
import Subheading from '../atoms/typography/Subheading';
import Icon from '../atoms/Icon';
import { Link } from 'react-router-dom';

const StyledPlantCardSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
	padding-inline: var(--page-padding-sides);
	padding-block: var(--page-padding-block);
	text-align: left;
`;

const StyledPlantCardPage = styled.section`
	background-image: url(../assets/images/cardsBg.png);
	background-size: cover;
	text-align: center;
	background-repeat: no-repeat;
	background-position: center;
	padding-block: 2rem;
`;

const StyledAddLink = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 1rem;
	> a {
		text-decoration: none;
		color: var(--primary-color);
		&:hover {
			color: var(--hover-color);
			text-decoration: underline;
		}
	}
`;

const PlantCards = () => {
	const { plants } = useContext(PlantContext);

	return (
		<StyledPlantCardPage>
			<Subheading text='Welcome to our store' />
			<SecondaryTitle text='Our Plants' />
			<StyledAddLink>
				<Icon iconClass={'bi bi-plus-lg'} />
				<Link to='add'>Add a plant</Link>
			</StyledAddLink>
			<StyledPlantCardSection>
				{plants.map(plant => (
					<PlantCard key={plant.id} plant={plant} />
				))}
			</StyledPlantCardSection>
		</StyledPlantCardPage>
	);
};
export default PlantCards;
