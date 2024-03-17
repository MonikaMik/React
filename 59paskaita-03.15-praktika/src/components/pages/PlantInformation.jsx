import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import PlantContext from '../../contexts/PlantContext';
import styled from 'styled-components';
import Paragraph from '../atoms/typography/Paragraph';
import SecondaryTitle from '../atoms/typography/SecondaryTitle';
import Subheading from '../atoms/typography/Subheading';
import Image from '../atoms/card/Image';
import BoldText from '../atoms/typography/BoldText';

const PlantInformationPage = styled.section`
	margin: 0 auto 4rem;
	background-image: url('../assets/images/sectionBg.png');
	background-size: cover;
	display: flex;
	align-items: center;
	gap: 1rem;
	border-radius: 10px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	padding: 15px;
	width: 60%;
	> img {
		width: 35%;
	}
	ul > li {
		line-height: 1.8;
		font-size: 1rem;
		font-weight: 100;
		letter-spacing: 0.5px;
	}
`;

const PlantInformation = () => {
	const { plants } = useContext(PlantContext);
	const { id } = useParams();
	const plant = plants.find(plant => plant.id === id);

	return (
		<PlantInformationPage>
			<Image image={plant.pictureUrl} title={plant.name} />
			<div>
				<SecondaryTitle text={plant.name} />
				<Subheading text={plant.type} />
				<Paragraph text={plant.description} />

				<BoldText text='Care instructions:' />
				<ul>
					{plant.instructions.map((instruction, index) => (
						<li key={index}>{instruction}</li>
					))}
				</ul>
			</div>
		</PlantInformationPage>
	);
};
export default PlantInformation;
