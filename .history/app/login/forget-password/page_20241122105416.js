import React from "react";
import style from "../login.module.scss";
import { FaKey } from "react-icons/fa6";
const Forget = () => {
  return (
    <div className="l-user">
      <div className={style.l_login}>
        <div className={`${style.r_login} pixel-border-yellow bg-yellow`}>
          <div className={style.r_login_title}>
            <FaKey />
            <h4>忘記密碼</h4>
          </div>
          <div className={style.r_login_information}>
            <label htmlFor="email">信　箱</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              name="email"
              onChange={handleChange}
            />
            <button
              className="pixel-border-orange bg-orange"
              onClick={handleResendEmail}
              disabled={delay}
            >
              {delay ? count + "秒後,再次取得驗證碼" : "取得驗證碼"}
            </button>
          </div>
          <div className={style.r_login_information}>
            <label htmlFor="verification">驗證碼</label>
            <input type="verification" id="verification" name="verification" />
          </div>
          <div className={style.r_login_information}>
            <label htmlFor="password">新密碼</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>
          <div className={style.r_login_btn_group}>
            <button className="pixel-border-purple bg-color-purple">
              重設密碼
            </button>
          </div>
          <div style={{ textAlign: "center", fontSize: "12px" }}>
            透過使用本網站的忘記密碼功能，您同意遵守條款和條件。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
