"use client";
import React, { useState } from "react";
import style from "../components/user.module.scss";
import { FaUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FaPhone, FaChildren } from "react-icons/fa6";
import { FaMapMarkedAlt, FaBirthdayCake } from "react-icons/fa";
import { MdBoy, MdGirl } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";
export default function Update() {
  const [newFrom, setNewFrom] = useState({});

  // 寫入
  const handleWriteInformation = (e) => {
    let { name, value } = e.target;
    setNewFrom((prev) => ({ ...prev, [name]: value }));
  };
  // 確認變更
  const handleSave = () => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "確認修改資料嗎?",
      showCancelButton: true,
      confirmButtonText: "確認",
      cancelButtonText: "取消",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };

  return (
    <div
      className={`${style.col_user_edit_information} bg-color-purple pixel-border-purple`}
    >
      <div
        className={`${style.user_title_block} ${style.user_edit_information_title}`}
      >
        <div>
          <FaUser />
          <span>修改資料</span>
        </div>
        <div></div>
      </div>
      <div className={`${style.user_edit_information_content}`}>
        <div>
          <label>
            <MdMailOutline />
            電子信箱
          </label>
          <div>
            <input
              defaultValue="ff@gmail.com"
              name="email"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div>
          <label htmlFor="name">
            <TfiWrite />
            姓名
          </label>
          <div>
            <input
              id="name"
              defaultValue="王曉明"
              name="u_name"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div className={style.user_edit_gender}>
          <label>
            <FaChildren />
            性別
          </label>
          <div>
            <input
              id="male"
              name="u_gender"
              value="男"
              type="radio"
              onChange={handleWriteInformation}
              checked={newFrom.u_gender == "男"}
            />
            <label
              htmlFor="male"
              className={newFrom.u_gender == "男" ? style.active : ""}
            >
              <MdBoy />男
            </label>
            <input
              id="female"
              name="u_gender"
              value="女"
              type="radio"
              onChange={handleWriteInformation}
              checked={newFrom.u_gender == "女"}
            />
            <label
              htmlFor="female"
              className={newFrom.u_gender == "女" ? style.active : ""}
            >
              <MdGirl />女
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="birthday">
            <FaBirthdayCake />
            生日
          </label>
          <div>
            <input
              id="birthday"
              type="date"
              defaultValue="1995-10-11"
              name="u_birthday"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone">
            <FaPhone />
            電話
          </label>
          <div>
            <input
              id="phone"
              type="number"
              defaultValue="0988888888"
              pattern="\d{9}"
              maxLength="9"
              name="u_phone"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div>
          <label htmlFor="address">
            <FaMapMarkedAlt />
            住址
          </label>
          <div>
            <input
              id="address"
              type="text"
              defaultValue="高雄市"
              name="u_address"
              onChange={handleWriteInformation}
            />
          </div>
        </div>

        <div className={style.user_edit_btn}>
          <Link href="/st/user" className="pixel-border-yellow bg-yellow">
            回上一頁
          </Link>
          <button
            onClick={handleSave}
            className="pixel-border-yellow bg-yellow"
          >
            確認變更
          </button>
        </div>
      </div>
    </div>
  );
}
