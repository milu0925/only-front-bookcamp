import React, { useEffect } from "react";
import style from "../../components/user.module.scss";
import { FaUser } from "react-icons/fa";
export default function MyMessage() {
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
            <span>我的留言</span>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>分類</div>
            <div>標題</div>
            <div>作者</div>
            <div>回復內容</div>
            <div>回復日期</div>
          </div>
          <div className={style.user_content_list}>
            <div>分類</div>
            <div>標題</div>
            <div>作者</div>
            <div>回復內容</div>
            <div>回復日期</div>
          </div>
        </div>
      </div>
    </>
  );
}
