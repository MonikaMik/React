import styled from 'styled-components';
import Copyrights from '../molecules/Copyrights';
import FooterInfo from '../molecules/FooterInfo';

const StyledFooter = styled.footer`
	background-image: url('../assets/images/footerBg.png');
	background-size: cover;
`;
const WholeFooter = styled.div`
	position: relative;
	width: 100%;
	bottom: 0;
`;
const Footer = () => {
	return (
		<WholeFooter>
			<StyledFooter>
				<FooterInfo />
			</StyledFooter>
			<Copyrights />
		</WholeFooter>
	);
};
export default Footer;
