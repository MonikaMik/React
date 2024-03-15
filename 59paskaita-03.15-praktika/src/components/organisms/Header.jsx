import Logo from '../atoms/header/Logo';
import Navigation from '../molecules/Navigation';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: var(--page-padding-sides);
	padding-block: var(--page-padding-block);
`;

const Header = () => {
	return (
		<StyledHeader>
			<Logo imageSrc='../../../assets/images/logo.png' title='logo' />
			<Navigation />
		</StyledHeader>
	);
};
export default Header;
