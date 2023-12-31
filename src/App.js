import './App.css';
import Logo from "./Components/Logo/Logo";
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Practices from './Components/Practices/Practices';
import Clients from './Components/Clients/Clients';
import Team from './Components/Team/Team';
import FAQ from './Components/FAQ/FAQ';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      {/* <Navbar/> */}
      <Header/>
      <Intro/>
      <Practices/>
      <Clients/>
      <Team/>
      <FAQ/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
