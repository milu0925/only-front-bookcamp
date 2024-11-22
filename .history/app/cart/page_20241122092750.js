"use client";
import React, { useEffect, useState } from "react";

import CartPart from "./components/cart-part";
import CartItem from "./components/cart-item";
import CartFunction from "./components/cart-function";
import { useCart } from "@/hooks/cart-context";
const Cart = () => {
  // 訂單
  const [order, setOrder] = useState({
    pay: 0, //付款方式
    fee: 100, //運費
    discount: 0, //點數折扣
    subtotal: 0, //書本總計
    total: 0, //總價
    books: [], //所購買的書籍
  });

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
  useEffect(() => {
    calculateTotal(order.books, order.discount, order.fee);
  }, [order.books, order.discount, order.fee]);
  // 購物車內容+ - 打勾 沒打勾的動作
  const calculateBook = () => {
    const newdata = cart.filter((all) => {
      return order.books?.some((one) => all.c_id === one.c_id);
    });
    setOrder((prev) => ({ ...prev, books: newdata }));
  };
  useEffect(() => {
    calculateBook();
  }, [cart]);

  return (
    <>
      <CartPart active="data" />
      <div className="l-cart">
        <CartItem setOrder={setOrder} />
        <CartFunction order={order} setOrder={setOrder} />
      </div>
    </>
  );
};

export default Cart;
