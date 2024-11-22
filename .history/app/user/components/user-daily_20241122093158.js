import React, { useState, useEffect } from "react";
import style from "./user.module.scss";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

export default function UserDaily() {
  // 抓到這個月的所有簽到資訊
  const [checkDay, setCheckDay] = useState([]);
  const checkdata = async (type) => {};
  return (
    <div
      className={`${style.col_user_daily} bg-color-purple pixel-border-purple`}
    >
      <div className={`${style.user_daily_title} ${style.user_title_block}`}>
        <div>
          <FaRegCalendarCheck />
          <span>每日簽到</span>
        </div>
        <div>
          <FaRegQuestionCircle />
          <span>關於簽到</span>
        </div>
      </div>
      <div className={style.user_daily_content}>
        <UserDailyCheckin checkDay={checkDay} />
      </div>
      <div className={style.user_daily_btn}>
        <button
          className={`${style.user_daily_btn_position} pixel-border-yellow bg-yellow`}
          onClick={() => {
            checkdata("check");
          }}
        >
          每日簽到 !<FaRegCheckCircle />
        </button>
        <span>
          每日簽到即可獲得1點
          <FaSackDollar />
          紅利點數~
        </span>
      </div>
    </div>
  );
}
