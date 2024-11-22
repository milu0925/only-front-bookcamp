import React from "react";
import style from "./cart.module.scss";
export default function CartTotal() {
  return (
    <div className={`${style.r_cart_total} pixel-border-purple bg-purple`}>
      <div className={style.col_cart_total}>
        <div>
          <span>商品小計</span>
          <span>500</span>
        </div>
        <div>
          <span>運費</span>
          <span>100</span>
        </div>
        <div>
          <span>點數折抵 -</span>
          <span>0</span>
        </div>
        <hr />
        <div>
          <span>總計</span>
          <span>600</span>
        </div>
      </div>
    </div>
  );
}
