"use client";
import React, { useEffect, useState } from "react";
import style from "../user.module.scss";
import { FaUser } from "react-icons/fa";
import { read_all_order, read_one_order } from "@/hooks/call-api";
import { useRouter } from "next/router";
export default function OrderListID() {
  const router = useRouter();
  const { id } = router.query;
  const [orderdata, setOrderdata] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const data = await read_one_order(id);
    if (data?.state === "success") {
      setOrderdata(data.data.detail);
    }
  };

  const handleReturn = () => {
    router.back();
  };

  return (
    <>
      <div
        className={`${style.col_user_order} bg-color-purple pixel-border-purple`}
      >
        <div
          className={`${style.user_title_block} ${style.user_edit_information_title}`}
        >
          <div>
            <FaUser />
            <span>訂單明細</span>
            <button
              className={style.user_edit_information_return}
              onClick={handleReturn}
            >
              返回
            </button>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>商品圖片</div>
            <div>商品名稱</div>
            <div>商品價格</div>
            <div>商品數量</div>
            <div>商品評價</div>
            <div>商品星數</div>
          </div>
          {orderdata.map((v) => (
            <div key={v.od_id} className={style.user_content_list}>
              <div className={style.user_content_list_img}>
                <img src={`/images/book/${v.b_img}`} />
              </div>
              <div>{v.b_title}</div>
              <div>{v.od_price}</div>
              <div>{v.od_count}</div>
              <div>{v.od_assess ? v.od_assess : "未評論"}</div>
              <div>{v.od_star ? v.od_star : "未給星數"}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
