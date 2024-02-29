import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import BandCards from "./components/BandCards";
import NewBandForm from "./components/NewBandForm";
import { useState, useEffect } from "react";

const App = () => {

  const [bands, setBands] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    picture: "",
    members: "",
    genre: "",
    liked: false,
    formed: ""
  });

  useEffect(() => {
    fetch('http://localhost:8080/bands')
      .then(res => res.json())
      .then(data => setBands(data))
  }, []);

  const addBand = newBand => {
    setBands([ ...bands, newBand ]);
    fetch('http://localhost:8080/bands', {
      method: "POST",
      headers: { "Content-type" : "application/json" },
      body: JSON.stringify(newBand)
    });
  }

  const changeStatus = id => {
    setBands(
      bands.map(band => {
        if(band.id === id) {
          fetch(`http://localhost:8080/bands/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              liked: !band.liked,
            })
          });
          return {
            ...band,
            liked: !band.liked
          };
        } else {
          return band;
        }
      })
    )
  }

  const deleteBand = id => {
    setBands(bands.filter(band => band.id !== id));
    fetch(`http://localhost:8080/bands/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
      });
  }

  return (
    <div className='wrapper'>
      <Header
        likedBands={(bands.filter(band => band.liked)).length}
      />
      <main>
        <p onClick={() => {setShowForm(!showForm)}}>
          {
            !showForm ? <i class="fa-regular fa-square-plus"></i> : <i class="fa-regular fa-square-minus"></i>
          }
          ADD A NEW BAND
        </p>
        {
          showForm === true &&  
            <NewBandForm 
              formInputs={formInputs}
              setFormInputs={setFormInputs}
              addBand={addBand}
            />
        }
      
        <BandCards 
          bands={bands}
          changeStatus={changeStatus}
          deleteBand={deleteBand}
        />
      </main>
      <Footer />
    </div>
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