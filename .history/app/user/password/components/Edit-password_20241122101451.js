import React from "react";
import style from "../../components/user.module.scss";
import { FaLock, FaKey } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
export default function EditPassword() {
  return (
    <div
      className={`${style.col_user_edit_information} bg-color-purple pixel-border-purple`}
    >
      <div
        className={`${style.user_title_block} ${style.user_edit_information_title}`}
      >
        <div>
          <FaLock />
          <span>修改密碼</span>
        </div>
        <div></div>
      </div>
      <div className={`${style.user_edit_information_content}`}>
        <div>
          <div>
            <label htmlFor="oldpassword">
              <FaKey />
              舊密碼
              <FaCheckCircle style={{ color: "green" }} />
            </label>
            <div>
              <input
                type="password"
                id="oldpassword"
                name="oldpassword"
                value="123456"
                disabled
              />
            </div>
          </div>
          <div>
            <label htmlFor="newpassword">
              <FaKey />
              新密碼
            </label>
            <div>
              <input
                type="password"
                id="newpassword"
                name="newpassword"
                value="123456"
                disabled
              />
            </div>
          </div>
          <div>
            <label htmlFor="new2password">
              <FaKey />
              確認新密碼
            </label>
            <div>
              <input
                type="password"
                id="new2password"
                name="new2password"
                value="123456"
                disabled
              />
            </div>
          </div>
          <div className={style.user_edit_btn}>
            <button className="pixel-border-yellow bg-yellow">確認變更</button>
          </div>
        </div>
        <div className={`${style.user_edit_password_ill} pixel-d-purple`}>
          <div>
            <FaCircleQuestion />
            <span>變更密碼注意事項</span>
          </div>
          <div>
            <RiErrorWarningFill />
            <span>
              複雜度：選擇一個強度足夠的新密碼，包括大小寫字母、數字和特殊符號。避免使用容易猜到的個人資訊，如生日、姓名等。
            </span>
          </div>
          <div>
            <RiErrorWarningFill />
            <span>
              定期更換：定期變更密碼，建議每三個到六個月進行一次更換，以減少密碼被猜測或盜取的風險。
            </span>
          </div>
          <div>
            <RiErrorWarningFill />
            <span>
              不要共享：不要將密碼共享給他人，無論是親友還是客服人員。合法的服務提供者不會要求您提供密碼。
            </span>
          </div>
          <div>
            <RiErrorWarningFill />
            <span>
              登出其他設備：變更密碼後，確保登出之前登入的所有設備，以避免其他人繼續訪問您的帳戶。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
