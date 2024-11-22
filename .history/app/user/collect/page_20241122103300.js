import React from "react";
import style from "../components/user.module.scss";
import { FaUser } from "react-icons/fa";
export default function Collect() {
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
            <span>收藏文章</span>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>類別</div>
            <div>標題</div>
            <div>作者</div>
            <div>收藏日期</div>
          </div>
          <div className={style.user_content_list}>
            <div>遊戲</div>
            <div>賣帳號..56等</div>
            <div>hit</div>
            <div>2024-04-05</div>
          </div>
        </div>
      </div>
    </>
  );
}
