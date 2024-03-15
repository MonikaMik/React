import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
	/* Add your styling here */
`;

const Label = ({ htmlFor, children }) => {
	return <StyledLabel htmlFor={htmlFor}>{children}: </StyledLabel>;
};

export default Label;
