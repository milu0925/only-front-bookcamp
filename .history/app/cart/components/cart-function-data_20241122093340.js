import React, { useEffect, useState } from "react";
import style from "./cart.module.scss";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCommentDollar } from "react-icons/fa6";
export default function CartData({ setOrder }) {
  const [chosen, setChosen] = useState(0);

  return (
    <div className={`${style.r_cart_data} pixel-border-black bg-white`}>
      <div>
        <div className={style.cart_data_title}>
          <FaCircleInfo />
          <span>購買人資訊</span>
        </div>
        <div className={style.cart_data_user}>
          <div>
            <span>購買人</span>
            <span>王曉明</span>
          </div>
          <div>
            <span>電話</span>
            <span>{auth.isAuth ? userData?.u_phone : ""}</span>
          </div>
          <div>
            <span>地址</span>
            <span>{auth.isAuth ? userData?.u_address : ""}</span>
          </div>
        </div>
      </div>

      <div>
        <div className={style.cart_data_title}>
          <FaCommentDollar />
          <span>付款方式</span>
        </div>
        <div className={style.cart_data_pay}>
          <div
            type="button"
            className={chosen === 1 ? style.chosen : ""}
            onClick={() => setChosen(1)}
          >
            <img alt="linepay" src="/images/linepay.png" />
            <label>LinePay</label>
          </div>
          <div
            type="button"
            className={chosen === 2 ? style.chosen : ""}
            onClick={() => setChosen(2)}
          >
            <img alt="homepay" src="/images/homepay.png" />
            <label>貨到付款</label>
          </div>
        </div>
      </div>
    </div>
  );
}
