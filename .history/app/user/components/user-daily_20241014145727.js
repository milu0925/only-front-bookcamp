import React, { useState, useEffect } from "react";
import style from "./user.module.scss";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import UserDailyCheckin from "./user-daily-checkin";
import { FaSackDollar } from "react-icons/fa6";
import { check_daily, get_daily, get_user } from "@/hooks/call-api";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/auth-context";

export default function UserDaily() {
  // 抓到這個月的所有簽到資訊
  const [checkDay, setCheckDay] = useState([]);
  const { getUserData } = useAuth();
  const checkdata = async (type) => {
    let data;
    if (type === "get") {
      data = await get_daily();
      setCheckDay(data.data);
      return;
    } else if (type === "check") {
      data = await check_daily();
    }
    if (data.state === "success") {
      setCheckDay(data.data);
      getUserData();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "簽到成功!",
      });
    } else if (data.state === "error") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "你已經簽到過了!",
      });
    }
  };
  useEffect(() => {
    checkdata("get");
  }, []);
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
