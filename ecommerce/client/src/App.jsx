
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar
import Home from './pages/Home'; // Import your pages
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import AddToCart from './pages/AddToCart';
import { CartProvider } from './pages/CartContext';
import BuyNow from './pages/BuyNow';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />  {/* Place Navbar here so it appears on every page */}
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home page */}
        <Route path="/shop" element={<Shop />} />   {/* Shop page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path='/AddToCart' element={<AddToCart/>}/>
        <Route path='/buy-now' element={<BuyNow/>}/>
        <Route path='/thankyou' element={<ThankYou/>}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
