import './App.css';
import Headings from './components/Headings.jsx';
import Korteles from "./components/Korteles";

const App = () => {

  const data = ["Labas rytas", "Pietų metas", "Geros dienos", "Labanaktis"];
  const lankytinos_LT_vietos = [
    {
      id: 0,
      pavadinimas: "Dieveniškių istorinis regioninis parkas",
      nuotrauka: {
        url: "https://cdn2.onlithuania.com/content/uploads/2021/04/Norviliskiu-pilis-is-oro-scaled.jpg",
        alt: "castle"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74648.86763633094!2d25.569631667678692!3d54.21943384568336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc2b641cb6b425%3A0xcc7c46ce69a0d4ac!2sDieveni%C5%A1ki%C5%B3%20istorinis%20regioninis%20parkas!5e0!3m2!1sen!2slt!4v1708935629013!5m2!1sen!2slt",
      aprasymas: "Dieveniškių istorinis regioninis parkas – regioninis parkas pietryčių Lietuvoje. Plotas 8598 ha,[1][2] direkcija Poškonyse. Parkas įsteigtas kultūros ir gamtos požiūriu vertingiems Dieveniškių apylinkių kraštovaizdžio ir etnokultūriniams kompleksams išsaugoti ir tvarkyti.",
    },{
      id: 1,
      pavadinimas: "Nemuno kilpų regioninis parkas",
      nuotrauka: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Neman_river.jpg/576px-Neman_river.jpg",
        alt: "river Neman"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37002.17081869705!2d23.95090317674734!3d54.57517240368522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7353e0286accb%3A0x42dfa2e301ea44f0!2sNemunas%20Loops%20Regional%20Park!5e0!3m2!1sen!2slt!4v1708935878477!5m2!1sen!2slt",
      aprasymas: "Nemuno kilpų regioninis parkas – regioninis parkas pietinėje Lietuvoje, direkcija Birštone. Plotas 25171 ha (miškai užima 67 proc.). Įsteigtas siekiant išsaugoti unikalų didžiųjų Nemuno kilpų ir Punios šilo kraštovaizdžiui, jo gamtinei ekosistemai bei kultūros paveldo vertybėms.",
    },{
      id: 2,
      pavadinimas: "Kernave",
      nuotrauka: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kernav%C4%97s_piliakalniai_4.jpg/440px-Kernav%C4%97s_piliakalniai_4.jpg",
        alt: "Kernaves kopos"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4589.869415727591!2d24.84671915255361!3d54.88651479110319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7634a854114d7%3A0xa00d18ec9baac30!2sKernav%C4%97%2C%2019172%20%C5%A0irvintos%20District%20Municipality!5e0!3m2!1sen!2slt!4v1708936183867!5m2!1sen!2slt",
      aprasymas: "Kernavė miestelis Širvintų rajono savivaldybėje, Neries dešiniajame krante, 18 km į pietvakarius nuo Širvintų, 35 km į šiaurės vakarus nuo Vilniaus. Seniūnijos centras, 2 seniūnaitijos (Kerniaus ir Piliakalnio). Miestelis garsus Kernavės piliakalniais, kuriems XIX a. sugalvoti vardai Pilies kalnas, Aukuro kalnas, Mindaugo kalnas (arba Mindaugo sosto piliakalnis), Lizdeikos kalnas ir Kriveikiškio piliakalnis.",
    },{
      id: 3,
      pavadinimas: "Plokštinės raketų bazė",
      nuotrauka: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Saltojo_karo_muziejus_2013_Panorama.jpg/500px-Saltojo_karo_muziejus_2013_Panorama.jpg",
        alt: "rocket base"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365827.2217733823!2d23.39563459219967!3d54.61494683191627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e50d5b6f59afab%3A0x4cad8f9cb50d6e90!2sCold%20War%20Museum!5e0!3m2!1sen!2slt!4v1708936426700!5m2!1sen!2slt",
      aprasymas: "Plokštinės požeminė balistinių raketų su termobranduoliniais užtaisais bazė TSRS ginkluotųjų pajėgų raketų bazė, pastatyta Plokštinės miške netoli Platelių ežero, 13 km šiauriau Plungės, aukščiausioje miškais apaugusioje, mažai apgyvendintoje regiono vietovėje į šiaurės rytus nuo Plokščių kaimo. Tai pirmoji kovinė Tarybų Sąjungos požeminė R-12 Dvina balistinių vidutinio nuotolio raketų bazė. Joje bazavosi vienas 79-ojo raketų pulko divizionas.",
    }
  ]
  return (
    <>
      <Headings 
        stuff={data}
      />
      <Korteles 
        data={lankytinos_LT_vietos}
      />
    </>
  );
}

export default App;
