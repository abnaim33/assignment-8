
import './App.css';
import Home from './components/home/Home';
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Services from './components/services/Services';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
function App() {
  return (
    <BrowserRouter>
      <div className='container'>

        <Header />



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
