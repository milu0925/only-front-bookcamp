"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./login.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/auth-context";
export default function UserLogin() {
  const { handleLogin } = useAuth();
  const user = { email: "ff@gmail.com", password: "123456" };

  return (
    <div className={style.l_login}>
      <form
        action="#"
        method="POST"
        className={`${style.r_login} pixel-border-yellow bg-yellow`}
      >
        <div className={style.r_login_title}>
          <FaUser />
          <h4>會員登入</h4>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="email">信箱</label>
          <input
            type="email"
            id="email"
            placeholder="電子郵件地址"
            autoComplete="off"
            name="email"
            value={user.email}
            disabled
          />
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            id="password"
            placeholder="密碼"
            name="password"
            value={user.password}
            disabled
            autoComplete="current-password"
          />
          <Link href="/user/forget-password" className="font-sm ms-3">
            忘記密碼？
          </Link>
        </div>
        <div className={style.r_login_btn_group}>
          <button
            className="pixel-border-purple bg-color-purple"
            onClick={(e) => {
              handleLogin(user);
            }}
          >
            登入
          </button>
          <Link href="/user/register" className="pixel-border-orange bg-orange">
            <span>還不是會員？ 立即</span>註冊<span>!</span>
          </Link>
        </div>
        <div>如登入，即代表同意本站隱私權政策和使用條款。</div>
      </form>
      <div className={`${style.r_quick_login} pixel-border-black bg-black`}>
        <div className={style.quick_login_text}>快速登入</div>
        <div className={style.quick_login_logo}>
          <FaLine />
          <FcGoogle />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}
