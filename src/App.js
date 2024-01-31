import './App.css';
import Navbar from './Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Action from './components/Action';
import Another from './components/Another';
import Something from './components/Something';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
   <Navbar />
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Action" element={<Action />} />
      <Route path="/Another" element={<Another />} />
      <Route path="/Something" element={<Something />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   <Footer />
   </>
  );
}

export default App;
