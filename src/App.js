import './App.css';
import Navbar from './Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar />
   <Header />
   <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUs" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
   <Footer />
   </>
  );
}

export default App;
