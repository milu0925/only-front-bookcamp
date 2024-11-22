import React, { useEffect, useState } from "react";
import style from "./cart.module.scss";
import { FaRegCheckCircle } from "react-icons/fa";
import { useAuth } from "@/hooks/auth-context";
export default function CartFinishTotal({ user }) {
  const { auth, userData } = useAuth();

  // 計算小計
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    if (user.detail) {
      const newtotal = user.detail.reduce((acc, item) => {
        return acc + item.b_price * item.od_count;
      }, 0);
      setSubtotal(newtotal);
    }
  }, [user]);

  return (
    <div className={`${style.r_cart_total} pixel-border-purple bg-purple`}>
      <div className={style.col_cart_user}>
        <div>
          <span>購買人</span>
          <span>{auth.isAuth ? userData?.u_name : ""}</span>
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
      <div className={style.col_cart_total_finish}>
        <FaRegCheckCircle />
        商品共
        <span className="bg-dark-purple">
          {user.detail ? user.detail.length : 0}
        </span>
        項
      </div>
      <div className={style.col_cart_total_finish}>
        <FaRegCheckCircle />
        付款方式
        <span className="bg-dark-purple">
          {user.order
            ? user.order.pay == 1
              ? "linepay"
              : "貨到付款"
            : "未付款"}
        </span>
      </div>
      <div className={style.col_cart_total}>
        <div>
          <span>商品小計</span>
          <span>{user ? subtotal : 0}</span>
        </div>
        <div>
          <span>運費</span>
          <span>{user.order ? user.order.fee : 0}</span>
        </div>
        <div>
          <span>點數折抵</span>
          <span>{user.order ? user.order.point : 0}</span>
        </div>
        <hr />
        <div>
          <span>總計</span>
          <span>{user.order ? user.order.o_total : 0}</span>
        </div>
      </div>
    </div>
  );
}
