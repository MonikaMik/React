import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	cursor: pointer;
`;

const ThemeToggleButton = ({ toggleTheme }) => {
	return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};
export default ThemeToggleButton;
