"use client";
import React, { useEffect, useState } from "react";
import style from "./cart.module.scss";
import { FaRegCheckCircle } from "react-icons/fa";
export default function CartFinishTotal({ user }) {
  // 計算小計
  const [subtotal, setSubtotal] = useState(0);

  return (
    <div className={`${style.r_cart_total} pixel-border-purple bg-purple`}>
      <div className={style.col_cart_user}>
        <div>
          <span>購買人</span>
          <span>王曉明</span>
        </div>
        <div>
          <span>電話</span>
          <span>0987987987</span>
        </div>
        <div>
          <span>地址</span>
          <span>高雄市三民區中華醫路123號</span>
        </div>
      </div>
      <div className={style.col_cart_total_finish}>
        <FaRegCheckCircle />
        商品共
        <span className="bg-dark-purple">1</span>項
      </div>
      <div className={style.col_cart_total_finish}>
        <FaRegCheckCircle />
        付款方式
        <span className="bg-dark-purple">linepay</span>
      </div>
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
          <span>點數折抵</span>
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
