import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Receptionist from './Components/Receptionist';
import {Doctor} from './Components/Doctor';
import Home from './Components/Home';
import Errorpage from './Components/Errorpage';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Ambulance from './Components/Ambulance'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/Ambulance'element={<Ambulance />}/>
      <Route path='/Doctor'element={<Doctor />}/>
      <Route path='*' element={<Errorpage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>

  );
}

export default App;
