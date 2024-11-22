"use client";
import React from "react";
import style from "./cart.module.scss";
import CartPoint from "./Cart-function-point";
import CartData from "./Cart-function-data";
import CartTotal from "./Cart-function-total";
import CartButton from "./Cart-button";
import Swal from "sweetalert2";
export default function CartFunction({ order, setOrder }) {
  // 前往付款
  const handlePay = async () => {};

  return (
    <div className={style.col_cart_function}>
      <CartPoint setOrder={setOrder} />
      <CartData setOrder={setOrder} />
      <CartTotal order={order} />
      <CartButton name="確認訂單" handlePay={handlePay} />
    </div>
  );
}
