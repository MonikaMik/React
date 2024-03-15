import styled from 'styled-components';

const StyledIcon = styled.i`
	color: white;
	font-size: 2rem;
	&:hover {
		color: var(--accent-color);
		cursor: pointer;
	}
`;

const LargeIcon = ({ iconClass }) => {
	return <StyledIcon className={iconClass} />;
};
export default LargeIcon;
