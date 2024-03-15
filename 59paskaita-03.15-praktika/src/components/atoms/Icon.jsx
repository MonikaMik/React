import styled from 'styled-components';

const StyledIcon = styled.i`
	color: var(--accent-color);
	font-size: 1.5rem;
`;

const Icon = ({ iconClass }) => {
	return <StyledIcon className={iconClass} />;
};
export default Icon;
