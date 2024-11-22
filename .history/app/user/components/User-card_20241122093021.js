import { useAuth } from "@/hooks/auth-context";
import React, { useEffect } from "react";
import style from "./user.module.scss";
import { FaCamera } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
export default function UserCard() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  // 上傳圖片
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
  };

  return (
    <div className={`${style.col_user_card}`}>
      <div className={style.user_card_block}></div>
      <div className={`${style.user_card} bg-color-purple pixel-border-purple`}>
        <div className={style.user_card_avatar}>
          <div className={style.user_card_avatar_block}>
            <img
              alt="user-avatar"
              src={`${domain}${auth.isAuth ? userData?.u_img : ""}`}
            />
            <input
              type="file"
              id="img-file"
              accept="image/*"
              name="avatar"
              onChange={handleFile}
            />
            <label htmlFor="img-file" className={style.upload_image_btn}>
              <FaCamera />
            </label>
          </div>
        </div>
        <div className={style.user_card_dark}>
          <div className={style.user_card_dark_block}>
            <div>
              <div>會員名稱</div>
              <span>{auth.isAuth ? userData?.u_name : "無"}</span>
            </div>
            <div>
              <div>可用點數</div>
              <span>{auth.isAuth ? userData?.point : 0}</span>
            </div>
          </div>
        </div>
        <div className={style.user_card_light}>
          <div className={style.user_card_light_block}>
            <h2>
              <FaUser />
              <span>基本資料</span>
            </h2>
            <div>
              <div>
                <div>生日</div>
                <span>{auth.isAuth ? userData?.u_birthday : "無"}</span>
              </div>
              <div>
                <div>電話</div>
                <span>{auth.isAuth ? userData?.u_phone : "無"}</span>
              </div>
              <div>
                <div>信箱</div>
                <span>{auth.isAuth ? userData?.email : "無"}</span>
              </div>
              <div>
                <div>收貨地址</div>
                <span>{auth.isAuth ? userData?.u_address : "無"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
