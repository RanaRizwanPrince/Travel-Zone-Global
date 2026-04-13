import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/NavBar"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Hotel from './Pages/Hotel';
import Visa from './Pages/Visa';
import Holidays from './Pages/Holidays';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Preloader from './Components/Preloader';
import MouseTrail from './Components/MouseTrail';
import { FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <>
      <a target='_blank' href="https://wa.me/97430978769" className='whatsapp'><FaWhatsapp /></a>
      <MouseTrail />
      <Preloader />
      <ScrollToTopButton />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Hotel' element={<Hotel />} />
        <Route path='/Visa' element={<Visa />} />
        <Route path='/Holidays' element={<Holidays />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App