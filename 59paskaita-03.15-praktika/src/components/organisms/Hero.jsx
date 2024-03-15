import styled from 'styled-components';
import PrimaryTitle from '../atoms/typography/PrimaryTitle';
import Paragraph from '../atoms/typography/Paragraph';
import Button from '../atoms/Button';
import HeroImage from '../atoms/HeroImage';

const StyledHero = styled.section`
	background-image: url('../../../assets/images/heroBg.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 10%;
	display: flex;
	padding-inline: var(--page-padding-sides);
	align-items: center;
	> * {
		flex-basis: 100%;
	}
	> div button {
		margin-top: 1rem;
	}
`;

const Hero = () => {
	return (
		<StyledHero>
			<div>
				<PrimaryTitle text='Get to know your plants' />
				<Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
				<Button text='Explore more' />
			</div>
			<HeroImage
				heroImage='https://purepng.com/public/uploads/large/purepng.com-plantnatureplant-961524678664sj8de.png'
				title='plant in hero section'
			/>
		</StyledHero>
	);
};
export default Hero;
