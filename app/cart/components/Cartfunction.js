"use client";
import React from "react";
import style from "./cart.module.scss";
import CartPoint from "./Cartfunctionpoint";
import CartData from "./Cartfunctiondata";
import CartTotal from "./Cartfunctiontotal";
import CartButton from "./Cartbutton";
export default function CartFunction() {
  // 前往付款
  const handlePay = async () => {};

  return (
    <div className={style.col_cart_function}>
      <CartPoint />
      <CartData />
      <CartTotal />
      <CartButton name="確認訂單" handlePay={handlePay} />
    </div>
  );
}
