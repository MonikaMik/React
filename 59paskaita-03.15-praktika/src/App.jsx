import './App.css';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/organisms/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import PlantCards from './components/pages/PlantCards';
import AddAPlant from './components/pages/AddAPlant';
import Footer from './components/organisms/Footer';
import PlantInformation from './components/pages/PlantInformation';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path='/plants'>
						<Route index element={<PlantCards />} />
						<Route path='add' element={<AddAPlant />} />
						<Route path=':id' element={<PlantInformation />} />
					</Route>
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
