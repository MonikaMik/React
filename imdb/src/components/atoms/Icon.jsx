import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.i`
	font-size: ${props => props.theme.iconSizes[props.size]};
	color: ${props => props.theme[props.color]};
`;

const Icon = ({ iconClass, size = '1em', color = 'black' }) => {
	return <StyledIcon className={`${iconClass}`} size={size} color={color} />;
};

export default Icon;
