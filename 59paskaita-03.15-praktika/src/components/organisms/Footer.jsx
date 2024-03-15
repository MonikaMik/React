import styled from 'styled-components';
import Copyrights from '../molecules/Copyrights';
import FooterInfo from '../molecules/FooterInfo';

const StyledFooter = styled.footer`
	background-image: url('../assets/images/footerBg.png');
`;

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<FooterInfo />
			</StyledFooter>
			<Copyrights />
		</>
	);
};
export default Footer;
