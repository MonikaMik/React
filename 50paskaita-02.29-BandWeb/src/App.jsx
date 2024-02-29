import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import BandCards from "./components/BandCards";

const App = () => {
  return (
    <>
    <Header />
    <main>
      <BandCards />
    </main>
    <Footer />
    </>
  );
}

export default App;


// Uždavinys:
//   Sukurti puslapį, kuriame būtų:
//     Header su:
//       Logo kairėje
//       User info dešinėje. User info susideda iš:
//         Ikonos, Vardo, Pažymėtų kortelių kiekio.
//     Main:
//       7+ korteles. Kortelės susideda iš:
//         Nuotraukos, id ir statuso (pažymėtas/nepažymėtas), pavadinimo, paragrafo.
//     Footer:
//       Copyright, soc. tinklų ikonos, terms and uses, privacy policy ir t.t... 

//   Suprogramuoti, kad paspaudus kortelės mygtuko "pažymėti/atžymėti" (ar kažko panašaus) - kortelės stilius pasikeistų 
//   ir/ar atsirastų kažkoks žymėjimas (vizualiai atvaizduoti, kad kortelė pažymėta ir šitaip išsiskirtų iš kitų).
//   NavBar'e, User info dalyje padaryti taip, kad keistųsi pažymėtų kortelių kiekis jeigu jie puslapyje yra pažymimi/atžymimi.
//   Visus state'us (useState) kurti App.jsx'e ir per props'us perduoti reikalingiems Komponentams.
//   Galimybė kurti ir/arba redaguoti korteles.
//   Duomenys saugojami JSON faile, kuris paleistas su json-server.

//   Extra 1:
//     Galimybė vartotojui prisijungti/atsijungti. (nereikia skirtingų vartotojų (tiesiog logIn / logOut mygtukai), 
//     header'yje atvaizduoja kad esi prisijungęs/atsijungęs)