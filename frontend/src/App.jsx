import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Shop from './pages/Shop/Shop';
import Contact from './pages/ContactUs/Contact';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
