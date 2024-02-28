import "./App.css";
import { useState, useEffect } from "react";
import Patiekalai from "./components/Patiekalai";
import NaujoPatiekaloForma from "./components/NaujoPatiekaloForma";
import Header from "./components/Header";

const App = () => {
  const [formInputs, setFormInputs] = useState({
    // pavadinimas:{
    //   value: '',
    //   error: {
    //     isOkay: false,
    //     validation: RegExp(),
    //     message: 'error message'
    //   }
    // },
    pavadinimas: "",
    nuotrauka: "",
    kilmesSalis: "",
    ragauta: false,
    ingridiantai: "",
    kainaNuo: "",
    kainaIki: "",
  });

  // const [dishes, setDishes] = useState([
  //   {
  //     id: 0,
  //     pavadinimas: 'Kebabas',
  //     nuotrauka: 'https://www.lamaistas.lt/uploads/modules/articles/original/2019/09/45115.jpg',
  //     kilmesSalis: 'Turkija',
  //     ragautas: true,
  //     ingridientai: ['mesa', 'padazas', 'kopustas', 'lavasas'],
  //     kaina: {
  //       nuo: 5,
  //       iki: 10
  //     }
  //   }, {
  //     id: 1,
  //     pavadinimas: 'Pica',
  //     nuotrauka: 'https://www.lamaistas.lt/uploads/modules/articles/original/2022/01/45365.jpg',
  //     kilmesSalis: 'Italija',
  //     ragautas: true,
  //     ingridientai: ['mesa', 'padas', 'suris', 'padazas'],
  //     kaina: {
  //       nuo: 8,
  //       iki: 16
  //     }
  //   }, {
  //     id: 2,
  //     pavadinimas: 'Cepelinai',
  //     nuotrauka: 'https://tv3.lt/Uploads/UArticles/leadPhotos/b1/f0/b9/00/b1f0b900ddb3deef12856c8b8abdc64c.jpg',
  //     kilmesSalis: 'Lietuva',
  //     ragautas: true,
  //     ingridientai: ['mesa', 'bulves', 'grietine'],
  //     kaina: {
  //       nuo: 1.5,
  //       iki: 5
  //     }
  //   }, {
  //     id: 3,
  //     pavadinimas: 'Ceviche',
  //     nuotrauka: 'https://www.cookingclassy.com/wp-content/uploads/2020/09/ceviche-6.jpg',
  //     kilmesSalis: 'Peru',
  //     ragautas: false,
  //     ingridientai: ['zuvis', 'laimas', 'darzoves'],
  //     kaina: {
  //       nuo: 10,
  //       iki: 20
  //     }
  //   }
  // ]);

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/dishes")
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
      });
  }, []);

  const keistiPatiekaloStatusa = id => {
    setDishes(
      dishes.map((dish) => {
        if (dish.id === id) {
          fetch(`http://localhost:3001/dishes/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              ragautas: !dish.ragautas,
            }),
          });
          return {
            ...dish,
            ragautas: !dish.ragautas,
          };
        } else {
          return dish;
        }
      })
    );
  };

  const trintiPatiekala = id => {
    setDishes(dishes.filter((dish) => dish.id !== id));
    fetch(`http://localhost:3001/dishes/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
  };

  const papildytiPatiekaluSarasa = naujasPatiekalas => {
    setDishes([...dishes, naujasPatiekalas]);
    fetch(`http://localhost:3001/dishes/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(naujasPatiekalas),
    })
  };

  return (
    <>
      <Header
        bendrasKiekis={dishes.length}
        ragautasKiekis={dishes.filter((dish) => dish.ragautas).length}
        neragautasKiekis={dishes.filter((dish) => !dish.ragautas).length}
      />
      <NaujoPatiekaloForma
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        addDish={papildytiPatiekaluSarasa}
      />
      <Patiekalai
        dishes={dishes}
        statusChange={keistiPatiekaloStatusa}
        deleteDish={trintiPatiekala}
      />
    </>
  );
};

export default App;
