"use client";
import React, { useEffect, useState } from "react";
import style from "../user.module.scss";
import { FaUser } from "react-icons/fa";
import { user_point_list } from "@/hooks/call-api";
export default function OrderPoint() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const data = await user_point_list();
    if (data?.state == "success") {
      setData(data.data);
    }
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
            <span>點數查詢</span>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>日期</div>
            <div>點數</div>
            <div>獲取方式</div>
          </div>
          {data.map((v) => (
            <div key={v.id} className={style.user_content_list}>
              <div className={style.date}>{v.date}</div>
              <div>{v.point}</div>
              <div>{v.type === "consume" ? "消費金額回饋" : "每日簽到"}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
