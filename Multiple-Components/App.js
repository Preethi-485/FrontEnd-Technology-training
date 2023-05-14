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
import Card from "./Card";
function App() {
  return (
    <div className="App">
      <h1>
        Two cards are: 
      </h1>
      <Card h2="First h2 card" h3="First h3 card"/>
      <br></br>
      <Card h2="Second h2 Card" h3="Second h3 card"/>
      
      
      
    </div>
  );
}

export default App;

