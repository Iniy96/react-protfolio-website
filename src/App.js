import './App.css';

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Protfolio from "./components/protfolio/Protfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Protfolio/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
