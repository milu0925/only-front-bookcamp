import React from "react";

import CartPart from "./components/Cartpart";
import CartItem from "./components/Cartitem";
import CartFunction from "./components/Cartfunction";
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
