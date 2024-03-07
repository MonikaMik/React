import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BandCards from "./components/BandCards";
import NewBandForm from "./components/NewBandForm";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 5%;
  > p:first-child {
    color: white;
    font-size: 2rem;
    margin-bottom: 0;
    &:hover {
      color: var(--yellow);
      cursor: pointer;
    }
  }
`;

const App = () => {
  const [bands, setBands] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState("");
  const [formInputs, setFormInputs] = useState({
    name: "",
    picture: "",
    members: "",
    genre: "",
    liked: "like",
    formed: "",
  });
  const [editFormInputs, setEditFormInputs] = useState({
    id: "",
    name: "",
    picture: "",
    members: "",
    genre: "",
    formed: "",
  });
  const [loginFormInputs, setLoginFormInputs] = useState({
    username: "",
    password: "",
  });
  const [registerFormInputs, setRegisterFormInputs] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => setBands(data));
  }, []);

  const addBand = (newBand) => {
    setBands([...bands, newBand]);
    fetch("http://localhost:8080/bands", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBand),
    });
  };

  const editBand = (editedBand) => {
    setBands(
      bands.map((band) => {
        if (band.id === editedBand.id) {
          return editedBand;
        } else {
          return band;
        }
      })
    );

    fetch(`http://localhost:8080/bands/${editedBand.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(editedBand),
    });
  };

  const changeStatus = (id) => {
    setBands(
      bands.map((band) => {
        if (band.id === id) {
          fetch(`http://localhost:8080/bands/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              liked: !band.liked,
            }),
          });
          return {
            ...band,
            liked: !band.liked,
          };
        } else {
          return band;
        }
      })
    );
  };

  const deleteBand = (id) => {
    setBands(bands.filter((band) => band.id !== id));
    fetch(`http://localhost:8080/bands/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
  };

  const registerUser = (newUser) => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((users) => {
        const userExists = users.some((user) => user.name === newUser.name);
        if (userExists) {
          alert("Username already taken. Please choose another username.");
          return;
        }

        fetch("http://localhost:8080/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((response) => {
            if (response.ok) {
              setUser(newUser.name);
              console.log("Registration successful");
            }
          })
          .catch((error) => console.error("Error registering user:", error));
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  return (
    <div className="wrapper">
      <Header
        likedBands={bands.filter((band) => band.liked).length}
        loginFormInputs={loginFormInputs}
        setLoginFormInputs={setLoginFormInputs}
        setUser={setUser}
        user={user}
        registerFormInputs={registerFormInputs}
        setRegisterFormInputs={setRegisterFormInputs}
        registerUser={registerUser}
      />
      <StyledMain>
        <p onClick={() => setShowForm(!showForm)}>
          {!showForm ? (
            <i className="fa-regular fa-square-plus"></i>
          ) : (
            <i className="fa-regular fa-square-minus"></i>
          )}
          ADD A NEW BAND
        </p>
        <CSSTransition
          in={showForm}
          timeout={300}
          classNames="fade"
          unmountOnExit
          appear
        >
          <NewBandForm
            formInputs={formInputs}
            setFormInputs={setFormInputs}
            addBand={addBand}
          />
        </CSSTransition>

        <BandCards
          bands={bands}
          changeStatus={changeStatus}
          deleteBand={deleteBand}
          editFormInputs={editFormInputs}
          setEditFormInputs={setEditFormInputs}
          editBand={editBand}
        />
      </StyledMain>
      <Footer />
    </div>
  );
};

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
