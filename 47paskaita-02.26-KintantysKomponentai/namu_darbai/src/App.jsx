import './App.css';
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

const App = () => {
  const images = [
    {
      src: "./media/girl.png",
      alt: "girl in a flower field",
      title: "Ipsum Feugiat"
    }, {
      src: "./media/girl.png",
      alt: "girl in a flower field",
      title: "Ipsum Feugiat"
    }, {
      src: "./media/girl.png",
      alt: "girl in a flower field",
      title: "Ipsum Feugiat"
    },{
      src: "./media/bubbles.png",
      alt: "man with bubbles in the background",
      title: "Rhoncus Semper"
    },{
      src: "./media/bubbles.png",
      alt: "man with bubbles in the background",
      title: "Rhoncus Semper"
    },{
      src: "./media/bubbles.png",
      alt: "man with bubbles in the background",
      title: "Rhoncus Semper"
    }    
  ]
  return (
    <>
      <Hero />
      <Portfolio 
        data={images}
      />
    </>
  );
}

export default App;
