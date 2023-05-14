import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";

import Main from "./Main";
import Sidebar from "./Sidebar";
//import Header from "./components/Header";
/*import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";*/

function App() {
  return (
    <div className="App">
      
      <Heading name="Anna" color="purple"/>
      <Sidebar name="Preethi" color="blue"/>

      <Main />
      
    </div>
  );
}

export default App;
