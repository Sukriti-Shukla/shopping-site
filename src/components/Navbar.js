import { Outlet, Link } from "react-router-dom";

import React from "react";
import "../styles/navbar.css";

function Navbar({ setShow, size }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            My Shopping
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span class="material-symbols-outlined">
              {/* <i className="fas fa-cart-plus"></i> */}
              shopping_cart
            </span>

            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
