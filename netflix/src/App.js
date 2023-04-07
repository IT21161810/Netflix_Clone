import './App.css';
import {  BrowserRouter,Routes,Route } from'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';


function App() {
  return (
     
    <BrowserRouter>
    <Routes>
      <Route  path = "/login"  element  = {<Login/>} exact/>
      <Route  path = "/signup" element = {<Signup/>}exact/>
      <Route  path = "/player" element = {<Player/>}exact/>
      <Route  path = "/"  element  = {<Netflix/>}exact/>
    </Routes>  
    </BrowserRouter>
  );

}

export default App;
