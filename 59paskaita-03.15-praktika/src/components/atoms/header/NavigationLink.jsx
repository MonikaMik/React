import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
	text-decoration: none;
	color: var(--primary-color);
	font-size: 1.3rem;
	&.active {
		color: var(--accent-color);
		text-decoration: underline;
	}
	&:hover {
		color: var(--important-color);
	}
`;
const NavigationLink = ({ path, text }) => {
	return <StyledLink to={path}>{text}</StyledLink>;
};
export default NavigationLink;
