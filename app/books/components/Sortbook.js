"use client";
import React from "react";
import style from "./book.module.scss";
import { MdOutlineMenuBook } from "react-icons/md";
import { useClick } from "@/hook/click-context";
export default function SortBook() {
  const { click, setClick } = useClick();
  const bookdata = [
    { id: 1, name: "藝術設計" },
    { id: 2, name: "人文社科" },
    { id: 4, name: "自然科普" },
    { id: 5, name: "醫療保健" },
    { id: 6, name: "生活風格" },
    { id: 7, name: "旅遊" },
    { id: 8, name: "輕小說" },
    { id: 9, name: "漫畫/圖文書" },
    { id: 10, name: "語言學習" },
    { id: 11, name: "考試用書" },
    { id: 12, name: "電腦資訊" },
    { id: 13, name: "其他" },
  ];

  return (
    <div className={style.l_sort_book}>
      <div className={style.r_sort_book_title}>
        <MdOutlineMenuBook />
        <span>書籍分類</span>
      </div>
      <div className={style.r_sort_book_content}>
        <ul>
          {bookdata.map((v, i) => (
            <li
              className={`${style.r_sort_book_btn} ${
                click == v.name ? style.active_btn : ""
              }`}
              key={i}
              data-id={i}
            >
              <div
                onClick={() => {
                  setClick(v.name);
                }}
              >
                {v.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
