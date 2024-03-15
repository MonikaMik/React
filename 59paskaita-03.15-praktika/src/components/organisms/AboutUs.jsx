import styled from 'styled-components';
import Subheading from '../atoms/typography/Subheading';
import SecondaryTitle from '../atoms/typography/SecondaryTitle';
import Paragraph from '../atoms/typography/Paragraph';

const StyledAboutUs = styled.section`
	padding-inline: var(--page-padding-sides);
	padding-block: 5rem;
	text-align: center;
`;

const AboutUs = () => {
	return (
		<StyledAboutUs>
			<Subheading text='what we do' />
			<SecondaryTitle text='About Us' />
			<Paragraph text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati, soluta voluptates, itaque deserunt quia incidunt consequatur consequuntur magnam id sint molestias voluptatem cum fuga quisquam, vero ipsa veniam. Velit officia sequi at repellendus fugiat labore vel, eligendi, rerum veniam praesentium molestiae. Facere a excepturi harum rerum temporibus praesentium beatae!' />
		</StyledAboutUs>
	);
};
export default AboutUs;
