import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import { CartProvider } from "react-use-cart";
function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
