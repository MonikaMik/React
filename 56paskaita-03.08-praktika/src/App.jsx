import './App.css';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import BandCards from './components/pages/BandCards/BandCards';
import NewBandForm from './components/pages/AddNewBand/NewBandForm';
import styled from 'styled-components';
import PageLoaderContext from './contexts/PageLoaderContext';
import { useContext } from 'react';

const StyledMain = styled.main`
	padding: 0 5%;
`;

const App = () => {
	const { pageLoader } = useContext(PageLoaderContext);

	return (
		<div className='wrapper'>
			<Header />
			<StyledMain>
				{pageLoader === 'form' ? <NewBandForm /> : <BandCards />}
			</StyledMain>
			<Footer />
		</div>
	);
};

export default App;
