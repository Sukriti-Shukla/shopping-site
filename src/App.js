import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
//import Items from "./components/Items";
import Cart from "./components/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // return (
  //   <React.Fragment>
  //     <Navbar setShow={setShow} size={cart.length} />
  //     {show ? (
  //       <Dashboard handleClick={handleClick} />
  //     ) : (
  //       <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
  //     )}
  //   </React.Fragment>
  // );
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard handleClick={handleClick} />} />

          <Route
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
