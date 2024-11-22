"use client";
import React, { useEffect, useState } from "react";
import style from "../../components/user.module.scss";
import { FaUser } from "react-icons/fa";
export default function Point() {
  const [data, setData] = useState([]);
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
          <div key={v.id} className={style.user_content_list}>
            <div className={style.date}>2024-01-22</div>
            <div>1</div>
            <div>每日簽到</div>
          </div>
        </div>
      </div>
    </>
  );
}
