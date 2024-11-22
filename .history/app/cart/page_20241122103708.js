"use client";
import React, { useEffect, useState } from "react";

import CartPart from "./components/cart-part";
import CartItem from "./components/cart-item";
import CartFunction from "./components/cart-function";
const Cart = () => {
  // 訂單總金額計算
  const calculateTotal = (books, discount, fee) => {
    if (books.length > 0) {
      // 書本總金額
      const book = books.map((book) => book.c_id);
      let books_price = cart
        .filter((i) => book.includes(i.c_id))
        .reduce((acc, item) => {
          return acc + item.b_price * item.c_count;
        }, 0);

      setOrder((prev) => ({ ...prev, subtotal: books_price }));
      // 總共要付款的金額
      let total;
      if (books_price >= 3000) {
        total = books_price - discount;
        setOrder((prev) => ({ ...prev, fee: 0, total: total }));
      } else if (books_price < 3000 && books_price > 0) {
        total = books_price + fee - discount;
        setOrder((prev) => ({ ...prev, fee: 100, total: total }));
      } else {
        setOrder((prev) => ({ ...prev, subtotal: 0, fee: 0, total: 0 }));
      }
    } else {
      setOrder((prev) => ({ ...prev, subtotal: 0, fee: 0, total: 0 }));
    }
  };

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
