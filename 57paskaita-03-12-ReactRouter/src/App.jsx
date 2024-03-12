import './App.css';
import PlanetCards from './components/pages/PlanetCards';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Header from './components/UI/Header';
import { Routes, Route } from 'react-router-dom';
import AddNewCard from './components/pages/AddNewCard';
import NotFound from './components/pages/NotFound';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cards' element={<PlanetCards />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/addCard' element={<AddNewCard />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
