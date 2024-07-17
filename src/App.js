import "./App.css";
import Navbar from "./components/pages/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/pages/HomePage/Home.js";
import Services from "./components/pages/pages/HomePage/Services1.js"

import Footer from "./components/pages/pages/HomePage/Footer/Footer.js";
import Products from "./components/pages/Products.js";
import SignUp from "./components/pages/SignUp.js";
import AddToCart from "./components/pages/AddToCart.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Add to 🛒" element={<AddToCart />} />
      
        
        
       
        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
