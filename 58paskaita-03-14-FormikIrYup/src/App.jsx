import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import AddNewCard from './components/pages/AddNewCard';
import ProductCards from './components/pages/ProductCards';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/add' element={<AddNewCard />} />
					<Route path='/products' element={<ProductCards />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
