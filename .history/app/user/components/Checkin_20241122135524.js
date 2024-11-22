import React, { useEffect, useState } from "react";
import style from "./user.module.scss";
export default function UserCheckin({ checkDay }) {
  // 計算這個月的月份日期
  const [day, setDay] = useState([]);
  const calcThisMonthDay = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    return new Date(year, month + 1, 0).getDate();
  };
  useEffect(() => {
    const date = calcThisMonthDay();
    const arraydate = Array.from({ length: date }, (v, i) => i + 1);
    setDay(arraydate);
  }, []);

  return (
    <>
      {day.map((v, i) => {
        const matchedCheckDay = checkDay?.find((be) => be.id === i + 1);
        return (
          <div
            key={i}
            className={`${style.day} ${
              matchedCheckDay
                ? matchedCheckDay.sign == 1
                  ? style.signed
                  : style.expired
                : style.default
            }`}
          >
            {v}
          </div>
        );
      })}
    </>
  );
}
