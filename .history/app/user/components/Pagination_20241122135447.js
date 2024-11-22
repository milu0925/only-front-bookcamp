import React from "react";
import style from "./pagination.module.scss";
import {
  FaCaretLeft,
  FaCaretRight,
  FaBackward,
  FaForward,
} from "react-icons/fa6";
export default function Pagination({ ctPage, setctPage, total, PerPage }) {
  // 分頁觸發
  const handlePageClick = (e) => {
    const type = e.currentTarget.name;
    if (type === "first") {
      setctPage(1);
    } else if (type === "last") {
      setctPage(Math.ceil(total.length / PerPage)); //無條件進位
    } else if (type === "sub" && ctPage > 1) {
      setctPage(ctPage - 1);
    } else if (type === "add" && ctPage < total.length / PerPage) {
      setctPage(ctPage + 1);
    }
  };

  return (
    <ul className={style.l_pagination}>
      <li>
        <button name="first" onClick={handlePageClick}>
          <FaBackward />
        </button>
      </li>
      <li>
        <button name="sub" onClick={handlePageClick}>
          <FaCaretLeft />
        </button>
      </li>
      <li>{ctPage}</li>
      <li>
        <button name="add" onClick={handlePageClick}>
          <FaCaretRight />
        </button>
      </li>
      <li>
        <button name="last" onClick={handlePageClick}>
          <FaForward />
        </button>
      </li>
    </ul>
  );
}
