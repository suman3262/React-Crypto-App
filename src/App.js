import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchange from "./components/Exchange";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
     <>
       <Router>
       <Header/>
         <Routes>
           <Route path='/' element={<Home/>} />
          <Route path="/coins" element={<Coins/>} />
          <Route path="/coins/:id" element={<CoinDetails/>} />
          <Route path="/exchange" element={<Exchange/>} /> 
         </Routes>
         <Footer/>
       </Router>
     </>
  );
}

export default App;
