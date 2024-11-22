import React from "react";

import CartPart from "./components/cart-part";
import CartItem from "./components/cart-item";
import CartFunction from "./components/cart-function";
const Cart = () => {
  return (
    <>
      <CartPart active="data" />
      <div className="l-cart">
        <CartItem />
        <CartFunction />
      </div>
    </>
  );
};

export default Cart;
