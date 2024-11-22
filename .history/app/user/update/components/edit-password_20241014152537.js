import React, { useState } from "react";
import style from "../user.module.scss";
import { FaLock, FaKey } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaCircleQuestion } from "react-icons/fa6";
import Swal from "sweetalert2";
import { user_password_check, user_password_update } from "@/hooks/call-api";
import { useAuth } from "@/hooks/auth-context";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
export default function EditPassword() {
  const { handleLogout } = useAuth();
  const [formData, setFormData] = useState({
    oldpassword: "",
    newpassword: "",
    new2password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(await checkForm())) {
      return;
    }

    const data = await user_password_update(formData);
    if (data.state === "success") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "密碼修改成功",
      }).then((r) => {
        handleLogout();
      });
    } else if (data.state === "error") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "舊密碼輸入錯誤，請重新輸入。",
      });
    }
  };

  const checkForm = async () => {
    if (formData.oldpassword === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請輸入您的密碼!",
      });
      return false;
    }

    if (!checkPasswd(formData.newpassword, formData.new2password)) {
      return false;
    }

    const result = await Swal.fire({
      title: "確定要送出嗎？",
      text: "送出後請重新登入會員",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "確定",
      cancelButtonText: "取消",
    });

    return result.isConfirmed;
  };

  // 確認第一組密碼跟第二組密碼相同
  const checkPasswd = (password1, password2) => {
    if (password1 === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請輸入您的新密碼!",
      });
      return false;
    }

    if (password1.length < 5 || password1.length > 20) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "密碼長度只能5到20個字母與數字 !",
      });
      return false;
    }

    if (password1 !== password2) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "密碼二次輸入不一樣,請重新輸入 !",
      });
      return false;
    }

    return true;
  };
  // 當輸入完舊密碼後，離開input框若不正確即時跳提示
  const [message, setMessage] = useState("");
  const checkPassword = async () => {
    const data = await user_password_check(formData);
    setMessage(data.state);
  };
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
              {message ? (
                message === "success" ? (
                  <FaCheckCircle style={{ color: "green" }} />
                ) : (
                  <div style={{ color: "red" }}>
                    <MdCancel /> 密碼錯誤請重新輸入
                  </div>
                )
              ) : (
                ""
              )}
            </label>
            <div>
              <input
                type="password"
                id="oldpassword"
                name="oldpassword"
                onChange={handleChange}
                onBlur={checkPassword}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.user_edit_btn}>
            <button
              className="pixel-border-yellow bg-yellow"
              onClick={handleSubmit}
            >
              確認變更
            </button>
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
