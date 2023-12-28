import "./App.css";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Cart from "./screens/Cart";
import ProductDetail from "./screens/ProductDetail";
import Admin from "./screens/Admin";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import AdminLogin from "./screens/AdminLogin";

function App() {
  return (
        <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
