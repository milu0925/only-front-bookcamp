"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./header.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "@/hooks/auth-context";

const Header = () => {
  const { auth, userdata, handleLogout } = useAuth();
  // 登入按鈕滑入顯示
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 購物車的數量顯示
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={style.header}>
        <Link className={style.logo} href="/">
          <img src="/images/logo.jpg" alt="logo" width="100%" />
        </Link>
        <div className={style.header_btn_group}>
          <div>
            <Link
              href="/cart"
              className={`${style.header_btn_cart} pixel-border-white bg-white`}
            >
              <FaCartShopping />
              <span className={style.header_btn_cart_count}>{count}</span>
            </Link>
          </div>

          <div className={style.member}>
            {auth ? (
              <Link
                href="/user"
                className={`${style.header_btn_login} pixel-border-yellow bg-yellow`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                歡迎, 王曉明
              </Link>
            ) : (
              <Link
                href="/user/login"
                className={`${style.header_btn_login} pixel-border-yellow bg-yellow`}
              >
                登入/註冊
              </Link>
            )}
            <div
              className={`${style.member_center} ${
                isHovered ? style.block : style.none
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul>
                <li>
                  <Link href="/user">會員中心</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>登出</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
