import React, { useState } from "react";
import style from "./user.module.scss";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
export default function UserAside() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const { auth, handleLogout, userData } = useAuth();
  // 開關
  const [isOpen, setIsOpen] = useState({ id: null, status: false });
  const handleToggle = (id) => {
    if (isOpen.id === id) {
      setIsOpen({ id, status: !isOpen.status });
    } else {
      setIsOpen({ id, status: true });
    }
  };

  return (
    <div className={style.col_user_aside}>
      <div className={style.user_aside_title}>
        <div>
          <div className={style.user_name_and_icon}>
            <img
              alt="user-avatar"
              src={`${domain}${auth.isAuth ? userData?.u_img : ""}`}
            />
            <span>王曉明</span>
          </div>
          <div className={style.user_welcome_word}>歡迎回到會員中心!</div>
        </div>
      </div>
      <div className={style.user_aside_content}>
        <button
          className={`${style.collapse_btn} ${
            isOpen.id === 1 && isOpen.status && style.active
          }`}
          onClick={() => handleToggle(1)}
        >
          會員資訊
          <FaCaretDown />
        </button>
        <div
          className={`${
            isOpen.id === 1 && isOpen.status
              ? style.collapse_btn_child
              : style.collapse_btn_child_close
          }`}
        >
          <ul>
            <li>
              <Link href="/user/update">修改資料</Link>
            </li>
            <li>
              <Link href="/user/reset-password">修改密碼</Link>
            </li>
          </ul>
        </div>

        <button
          className={`${style.collapse_btn} ${
            isOpen.id === 2 && isOpen.status && style.active
          }`}
          onClick={() => handleToggle(2)}
        >
          消費紀錄
          <FaCaretDown />
        </button>
        <div
          className={`${
            isOpen.id === 2 && isOpen.status
              ? style.collapse_btn_child
              : style.collapse_btn_child_close
          }`}
        >
          <div>
            <ul>
              <li>
                <Link href="/user/order">訂單紀錄</Link>
              </li>
              <li>
                <Link href="/user/point-record">點數查詢</Link>
              </li>
            </ul>
          </div>
        </div>

        <button
          className={`${style.collapse_btn} ${
            isOpen.id === 3 && isOpen.status && style.active
          }`}
          onClick={() => handleToggle(3)}
        >
          文章資訊
          <FaCaretDown />
        </button>
        <div
          className={`${
            isOpen.id === 3 && isOpen.status
              ? style.collapse_btn_child
              : style.collapse_btn_child_close
          }`}
        >
          <div>
            <ul>
              <li>
                <Link href="/st/user/forum">我的文章</Link>
              </li>
              <li>
                <Link href="/st/user/forum/message">我的留言</Link>
              </li>
              <li>
                <Link href="/st/user/forum/collect">收藏文章</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.user_aside_footer}>
        <button
          className="pixel-border-yellow bg-yellow"
          onClick={handleLogout}
        >
          登出
        </button>
      </div>
    </div>
  );
}
