import React from "react";
import style from "../components/user.module.scss";
import { FaUser } from "react-icons/fa";

export default function Forum() {
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
            <span>我的文章</span>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>書籍</div>
            <div>內容</div>
            <div>人氣</div>
            <div>日期</div>
            <div>收藏數</div>
          </div>
          <div className={style.user_content_list}>
            <div>user collapse</div>
            <div>有一天...</div>
            <div>999</div>
            <div>2024-10-05</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </>
  );
}
