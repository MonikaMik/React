export const baseTheme = {
	iconSizes: {
		small: '1.1rem',
		medium: '1.5rem',
		large: '2rem'
	}
};

export const lightTheme = {
	...baseTheme,
	body: '#FFF',
	cardBody: '#e6e6e6',
	text: 'black',
	faintText: '#525252',
	accentBlue: '#5899ef',
	accentYellow: '#f5c519',
	button: '#d3d3d3',
	hover: 'white'
};

export const darkTheme = {
	...baseTheme,
	body: 'black',
	cardBody: '#1a1a1a',
	text: '#FAFAFA',
	faintText: '#999',
	accentBlue: '#5899ef',
	accentYellow: '#f5c519',
	button: '#2c2c2c',
	hover: '#30353d'
};
