import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Navbar from "./components/header";

function App() {
  return (
    <div className="">
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/cart" element={<Cart />}>
        Cart
      </Route>
    </Routes>
    </div>

  );
}

export default App;
