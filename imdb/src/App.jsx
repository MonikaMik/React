import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { useState } from 'react';
import Header from './components/organisms/Header';
import MovieCards from './components/pages/MovieCards';

const App = () => {
	const [theme, setTheme] = useState('light');

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<Header setTheme={setTheme} theme={theme} />
			<Routes>
				<Route path='/' element={<MovieCards />} />
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>
		</ThemeProvider>
	);
};

export default App;
