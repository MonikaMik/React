import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cards from './components/pages/Cards';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import AddNewCard from './components/pages/AddNewCard';
import UsersContext from './contexts/UsersContext';
import { useContext } from 'react';

const App = () => {
	const { loggedInUser } = useContext(UsersContext);

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path='/cards'>
						<Route path='allCards' element={<Cards />} />
						<Route
							path='addNew'
							element={
								loggedInUser ? <AddNewCard /> : <Navigate to='/user/login' />
							}
						/>
					</Route>
					<Route path='/user'>
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
					</Route>
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
