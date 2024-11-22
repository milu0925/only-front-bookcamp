"use client";
import React, { useState } from "react";
import style from "./cart.module.scss";

import { FaSearchDollar } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
export default function CartPoint({ setOrder }) {
  const [useILL, setUseILL] = useState(false);

  // 是否折抵
  const handleOption = (e) => {
    if (e.target.id === "all") {
      setOrder((prev) => ({
        ...prev,
        discount: auth ? userdata.point : 0,
      }));
    } else {
      setOrder((prev) => ({ ...prev, discount: 0 }));
    }
  };

  return (
    <div className={`${style.r_cart_point} pixel-border-yellow bg-yellow`}>
      <div className={style.cart_point_title}>
        <FaSearchDollar />
        點數折抵
        <FaCircleQuestion onClick={() => setUseILL(true)} />
      </div>

      <div className={style.cart_point_view}>
        <span>您的點數為</span>
        <label>158</label>
        <span>點，請選擇你需要使用的點數。</span>
      </div>

      <div className={`${style.cart_point_view_use} input-radio-div`}>
        <div>
          <input type="radio" id="all" name="point" onChange={handleOption} />
          <label className="input-radio-label" htmlFor="all">
            全部折抵
          </label>
        </div>
        <div>
          <input type="radio" id="none" name="point" onChange={handleOption} />
          <label className="input-radio-label" htmlFor="none">
            不折抵
          </label>
        </div>
      </div>
      <div
        className={`${style.cart_point_illustrate} ${
          useILL ? style.visible : ""
        }`}
      >
        <label>
          點數使用說明
          <FiDelete onClick={() => setUseILL(false)} />
        </label>
        <ul>
          <li>
            1. 紅利點數的累積方式：
            您可以在每次購物時獲得紅利點數。每消費一定金額，您將獲得相應的紅利點數。您也可以通過參加促銷活動、分享產品、撰寫評論等方式獲得額外的紅利點數。
          </li>
          <li>
            2. 紅利點數的轉讓和退換：
            紅利點數是您個人的，不能轉讓給其他人。此外，一旦您使用了紅利點數，我們將無法退換或退還您的紅利點數。
          </li>
          <li>
            3. 規則和條款的變更：
            我們保留根據需要隨時更改紅利點數計劃的規則和條款的權利。任何變更都將在我們的網站上公佈，請定期查看以確保您了解最新的紅利點數政策。
          </li>
        </ul>
      </div>
    </div>
  );
}
