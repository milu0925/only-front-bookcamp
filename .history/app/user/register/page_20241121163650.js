"use client";
import React from "react";
import style from "../login/login.module.scss";
import { FaUserPlus } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { TbGenderDemiboy, TbGenderDemigirl } from "react-icons/tb";
import { useRouter, redirect } from "next/navigation";
import Link from "next/link";
import { FaLine } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
export default function UserRegister() {
  const router = useRouter();

  return (
    <div className={style.l_login}>
      <form
        action="#"
        method="POST"
        className={`${style.r_login} pixel-border-yellow bg-yellow`}
      >
        <div className={style.r_login_title}>
          <FaUserPlus />
          <h4>加入會員</h4>
          <FaLine style={{ color: "#25bd39", cursor: "pointer" }} />
          <FcGoogle style={{ cursor: "pointer" }} />
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="email">
            <span>*</span>電子信箱
          </label>
          <input
            type="email"
            id="email"
            placeholder="電子郵件地址"
            autoComplete="off"
            name="email"
            disabled
          />
        </div>
        <div className={style.prompt}>
          <label> </label>
          <span>請填寫您常用的電子郵件，以便日後寄送通知信件。</span>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="password">
            <span>*</span>使用密碼
          </label>
          <input
            type="password"
            id="password"
            placeholder="密碼"
            name="password"
            autoComplete="current-password"
            disabled
          />
        </div>
        <div className={style.prompt}>
          <label></label>
          <span>請填入5~20個字元以內的英文字母、數字。</span>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="password2">
            <span>*</span>確認密碼
          </label>
          <input
            type="password"
            id="password2"
            placeholder="密碼"
            name="passwordcheck"
            disabled
            autoComplete="current-password"
          />
        </div>

        <div className={style.r_login_title}>
          <FaIdCard />
          <h4>個人資料</h4>
        </div>
        <div className={style.col_information}>
          <div className={style.r_login_information}>
            <label htmlFor="username">
              <span>*</span>姓名
            </label>
            <input
              type="text"
              id="username"
              placeholder="姓名"
              autoComplete="off"
              name="name"
              disabled
            />
          </div>
          <div className={style.r_login_information}>
            <label htmlFor="username">
              <span>*</span>姓別
            </label>
            <div className={style.information_gender_g}>
              <div className={`${style.information_gender}`}>
                <label htmlFor="boy">
                  <TbGenderDemiboy />
                  <div>男</div>
                </label>
                <input
                  id="boy"
                  type="radio"
                  value="男"
                  autoComplete="off"
                  name="gender"
                  disabled
                />
              </div>
              <div className={`${style.information_gender}`}>
                <label htmlFor="girl">
                  <TbGenderDemigirl />
                  <div>女</div>
                </label>
                <input
                  id="girl"
                  type="radio"
                  name="gender"
                  value="女"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.col_information}>
          <div
            className={`${style.r_login_information} ${style.information50}`}
          >
            <label htmlFor="birthday">
              <span>*</span>生日
            </label>
            <input type="date" id="birthday" name="birthday" disabled />
          </div>
          <div
            className={`${style.r_login_information} ${style.information50}`}
          >
            <label htmlFor="phone">
              <span>*</span>電話
            </label>
            <input
              type="number"
              id="phone"
              autoComplete="off"
              name="phone"
              max={10}
              disabled
            />
          </div>
        </div>
        <div className={style.r_login_information}>
          <label htmlFor="address">住址</label>
          <input
            type="text"
            id="address"
            autoComplete="off"
            name="address"
            disabled
          />
        </div>
        <div className={style.align}>
          如建立帳號，即代表同意本站隱私權政策和使用條款。
        </div>
        <div className={style.r_register_btn_group}>
          <button className="pixel-border-purple bg-color-purple">重設</button>
          <button className="pixel-border-purple bg-color-purple">註冊</button>
          <button
            className="pixel-border-purple bg-color-purple"
            onClick={() => router.push("/")}
          >
            返回
          </button>
        </div>
        <div className={style.align}>
          已經是會員了嗎？<Link href="/user/login">登入</Link>。
        </div>
      </form>
    </div>
  );
}
