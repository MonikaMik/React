import './App.css';
import PlanetCards from './components/pages/PlanetCards';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Header from './components/UI/Header';
import { Routes, Route } from 'react-router-dom';
import AddNewCard from './components/pages/AddNewCard';
import NotFound from './components/pages/NotFound';
import OnePlanetPage from './components/pages/OnePlanetPage';
import EditPlanetPage from './components/pages/EditPlanetPage';
import UserPage from './components/pages/UserPage';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/user' element={<UserPage />} />
					<Route path='cards'>
						<Route index element={<PlanetCards />} />
						<Route path=':id' element={<OnePlanetPage />} />
						<Route path='add' element={<AddNewCard />} />
						<Route path=':id/edit' element={<EditPlanetPage />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
