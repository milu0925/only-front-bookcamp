"use client";

import React, { useState } from "react";
import Link from "next/link";
import style from "./navbar.module.scss";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  //開啟下拉選單
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = (linkName) => {
    setIsHovered(linkName);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [searchValue, setSearchValue] = useState(""); //大搜尋
  const [rwdOpenSearch, setrwdOpenSearch] = useState(false);
  //監聽事件 按下Enter 可以搜尋
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      // 使用router.push進行導航
      router.push(`/newbook?query=${encodeURIComponent(searchValue)}`);
    }
  };
  // 分類
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
    <>
      {/* 電腦版 */}
      <div className={style.navbar}>
        <div className={style.navbar_line}>
          <div className={style.nav_line_bg}>
            <div className={style.nav_line_bg_org}></div>
          </div>
        </div>
        <div className={style.navbar_group}>
          <div className={style.navbar_btn}>
            <Link onMouseEnter={() => handleMouseEnter("book")} href="/book">
              實體書籍
            </Link>
            <Link href="/forum">討論交流</Link>
            <Link href="/milu">關於作者</Link>
          </div>
          <div className={style.navbar_search}>
            <input
              placeholder="找啥書?"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="submit">搜尋</button>
          </div>
        </div>

        <div
          className={`${style.slide_list} ${
            isHovered === "book" ? style.open : ""
          }`}
          onMouseEnter={() => handleMouseEnter("book")}
          onMouseLeave={handleMouseLeave}
        >
          <div className={style.slide_list_btn}>
            {bookdata.map((v) => (
              <div key={v.id} className={style.slide_list_link}>
                <Link href={`/book?b_genre=${v.name}`}>
                  {v.b_genre}
                  {v.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 手機板 */}
      <div className={style.m_navbar}>
        <button
          className={style.m_navbar_search}
          type="button"
          onClick={() => setrwdOpenSearch(!rwdOpenSearch)}
        >
          <FaSearch />
        </button>
        <div
          className={`${style.m_navbar_search_area} ${
            rwdOpenSearch ? "" : style.m_navbar_close
          }`}
        >
          <div>
            <input
              placeholder="找啥書?"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className={style.m_navbar_content}>
          <Link href="/book">實體書籍</Link>
          <Link href="/forum">討論交流</Link>
          <Link href="/milu">關於作者</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
