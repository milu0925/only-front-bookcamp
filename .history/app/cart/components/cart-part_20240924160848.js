import React, { useState } from "react";
import style from "./cart.module.scss";
import CartPartStep from "./cart-part-step";
import { TiArrowSortedDown } from "react-icons/ti";
export default function CartPart({active}) {
  return (
    <>
      <div className={`${style.r_cart_part}`}>
        <div>
          <CartPartStep name="填寫資料" icon="data" isActive={active} />
          <div className={`${style.cart_part_step_arrow} ${style.avtive}`}>
          <TiArrowSortedDown className='arrow-one' />
          <TiArrowSortedDown className="arrow-two" />
          </div>
          <CartPartStep name="訂單完成" icon="ok" isActive={active} />
        </div>
      </div>
    </>
  );
}
