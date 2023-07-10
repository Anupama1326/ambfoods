import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import Restaurants from './Components/Restaurants';
import Services from './Components/Services'
import Footer from './Components/Footer'
import Orders from './Components/Orders'
import {Routes} from "react-router-dom"
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/orders" element={<Orders/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
