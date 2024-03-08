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

// Padaryti puslapį:
//   Header dalyje:
//     Logotipas
//     NavBar
//       Vaikščioti tarp skirtingų "puslapių"

//   Main dalyje:
//     Kortelės (id, title, description, photo, timeStamp(nebūtina), ...):
//       Atvaizduoti visas korteles paimamas iš JSON serverio ir talpinamas Context'e.
//     Funkcionalumai (aprašyti Context'e su reducer'iu (pradžioje galima be jo)):
//       Naujų kortelių pridėjimas
//       Esamų kortelių trinimas
//       Esamų kortelių redagavimas (minimalus statuso ar ko keitimas ARBA pilnas kortelės redagavimas, kuriam jau reikės formos)

//   Footer dalyje:
//     Ikonos su nuorodomis
//     Copyrights

//   Extra:
//     Ekrane atvaizduoti loading gif'ą arba skeletoną (elementų šablonai be realių duomenų) kol duomenys nėra užkrauti į ekraną (kol dar vyksta jų siuntimas iš duomenų serverio).
//     DevTools -> Network -> No throttling pakeisti į Slow 3G, kad neužkrautų duomenų taip greitai ir būtų galimybė pamatyti loading gif'ą. (nepamiršti sugrąžinti nustatymo į no throttling kai baigi tikrintis)

//     Papildyti Header
//   User info dalimi:
//     LogIn ir Register (jei neprisijungęs)
//     UserAvatar ir UserName ir LogOut (jei prisijungęs)
//   Sukurti userContext, kuriame būtų saugojami visi vartotojų duomenys su funkcionalumais aprašytais Reducer'yje (galima pradžioje su State) (JSON serveryje, pradžioje galima be).
//     LogIn - prijungia vartotoją, jeigu teisingos įvestys.
//     Register - priregistruoja ir prijungia vartotoją, jeigu teisingos įvestys (userName, password, passwordRepeat, email, userAvatar). (EXTRA password hash)
//     LogOut - atjungia vartotoją.
//   Vartotojo duomenys: id, username, email, avatarImage, password.
//   Vartotojų duomenų funkcionalumai: kurtiNaujaVartotoja, prijungti ir atjungiVartotoja.
