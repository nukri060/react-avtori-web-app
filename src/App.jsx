import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./pages/Layouts/HeaderLayout";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/Faq";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import Shop from "./pages/Shop";
import { products } from "./data/products";
import CartPage from "./pages/Cart";
import { CartProvider } from "./context/CartContext"; 

import "./App.css";
import "./index.css";

function App() {
  return (
    <CartProvider> 
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
