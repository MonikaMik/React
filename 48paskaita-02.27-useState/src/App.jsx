import './App.css';
import { useState } from 'react';
import Skaiciuoti from "./components/Skaiciuoti";
import Header from "./components/Header";

const App = () => {

  // let skaicius = 0;
  // let skaicius = useState(0);
  const [skaicius, setSkaicius] = useState(0);
  // console.log(skaicius);
  const mazintiSkaiciu = () => {
    setSkaicius(skaicius-1);
    // console.log(skaicius);
  }
  const didintiSkaiciu = () => {
    // skaicius++;
    // const smth = document.querySelector('p');
    // smth.textContent = skaicius;
    setSkaicius(skaicius+1);
    // console.log(skaicius);
  }

  const [arPrisijunges, setArPrisijunges] = useState(false);
  const prisijungti = () => setArPrisijunges(true);
  const atsijungti = () => setArPrisijunges(false);

  return (
    <>
      <Header 
        logIn={prisijungti}
        logOut={atsijungti}
        isLoggedIn={arPrisijunges}
      />
      {
      arPrisijunges && 
        <Skaiciuoti 
          number={skaicius}
          increment={didintiSkaiciu}
          decrement={mazintiSkaiciu}
        />
      }
    </>
  );
}

export default App;
