import NavigationLink from '../atoms/header/NavigationLink';
import styled from 'styled-components';

const StyledNavigation = styled.div`
	display: flex;
	gap: 20px;
	font-size: large;
`;

const Navigation = () => {
	return (
		<StyledNavigation>
			<NavigationLink path='/' text='Home' />
			<NavigationLink path='/plants' text='Plants' />
		</StyledNavigation>
	);
};
export default Navigation;
