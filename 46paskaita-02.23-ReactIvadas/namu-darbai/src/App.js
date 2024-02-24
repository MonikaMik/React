import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Company from './components/Company.jsx';
import Services from './components/Services.jsx';
import Content from './components/Content.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="firstSection">
          <About />
          <Company />
          <Services />
        </section>
        <Content />
      </main>
    </>
  );
}

export default App;
