import styled from 'styled-components';
import AddAPlantForm from '../organisms/AddAPlantForm';
import SecondaryTitle from '../atoms/typography/SecondaryTitle';

const StyledAddAPlantSection = styled.section`
	padding-inline: var(--page-padding-sides);
	background-image: url('../assets/images/sectionBg.png');
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 72.68svh;
`;

const AddAPlant = () => (
	<StyledAddAPlantSection>
		<SecondaryTitle text='Add a new Plant' />
		<AddAPlantForm />
	</StyledAddAPlantSection>
);

export default AddAPlant;
