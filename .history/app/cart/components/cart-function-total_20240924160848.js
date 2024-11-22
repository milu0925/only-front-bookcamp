import React from "react";
import style from "./cart.module.scss";
export default function CartTotal({ order }) {
  return (
    <div className={`${style.r_cart_total} pixel-border-purple bg-purple`}>
      <div className={style.col_cart_total}>
        <div>
          <span>商品小計</span>
          <span>{order.subtotal}</span>
        </div>
        <div>
          <span>運費</span>
          <span>{order.fee}</span>
        </div>
        <div>
          <span>點數折抵 -</span>
          <span>{order.discount}</span>
        </div>
        <hr />
        <div>
          <span>總計</span>
          <span>{order.total}</span>
        </div>
      </div>
    </div>
  );
}
