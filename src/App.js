import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";




const App =() =>{
  return (
    <div>
      <Router>
        <Header/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;



// https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=a0c2b522ad262806f14f4175dbda2e63