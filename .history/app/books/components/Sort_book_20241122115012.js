"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import style from "./book.module.scss";
import { MdOutlineMenuBook } from "react-icons/md";
export default function SortBook({ setTag }) {
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
  // 選擇書籍分類時轉換
  const [active, setactive] = useState("");

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
                active == v.id ? style.active_btn : ""
              }`}
              key={v.id}
              data-id={v.id}
            >
              <button
                onClick={() => {
                  setactive(v.id);
                }}
              >
                {v.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
