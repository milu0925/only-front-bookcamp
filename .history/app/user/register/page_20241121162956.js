import React, { useState } from "react";
import style from "./login.module.scss";
import { FaUserPlus } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { TbGenderDemiboy, TbGenderDemigirl } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuth } from "@/hooks/auth-context";
import { FaLine } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
export default function UserRegister() {
  const router = useRouter();
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const { handleGoogleLogin, handleLineLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordcheck: "",
    name: "",
    gender: "",
    birthday: "2000-01-01",
    phone: "",
    address: "",
  });
  const handleUserData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // 限制手機長度
    const newValue =
      name === "phone" && value.length > 10 ? value.slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };
  // 自動偵測會員是否註冊過
  const handleCheckEmail = async () => {
    const checkdata = await axios.post(`${domain}/user/checkemail`, {
      email: formData.email,
    });
  };
  // 重設
  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
      passwordcheck: "",
      name: "",
      gender: "",
      birthday: "2000-01-01",
      phone: "",
      address: "",
    });
  };
  // 檢查數據
  const checkForm = async () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (formData.email === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請填寫您的信箱",
      });
      return false;
    }
    if (!emailPattern.test(formData.email)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請輸入有效的信箱格式",
      });
      return false;
    }
    if (!checkPasswd(formData.password, formData.passwordcheck)) {
      return false;
    }
    if (formData.name === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請填寫您的姓名",
      });
      return false;
    }
    if (formData.gender !== "男" && formData.gender !== "女") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請選擇您的性別",
      });
      return false;
    }
    if (formData.birthday === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請選擇您的生日",
      });
      return false;
    }
    if (formData.phone === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "請填寫您的電話",
      });
      return false;
    }
    const result = await Swal.fire({
      title: "確定要送出嗎？",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "確定",
      cancelButtonText: "取消",
    });
    return result.isConfirmed;
  };
  const checkPasswd = (password1, password2) => {
    if (password1 === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "密碼不可以空白",
      });
      return false;
    }

    if (password1.length < 5 || password1.length > 20) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "密碼只能5到20個英文字母或數字",
      });
      return false;
    }

    if (password1 !== password2) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "兩次密碼輸入不一致",
      });
      return false;
    }

    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await checkForm())) {
      return;
    }
    try {
      const { data } = await axios.post(`${domain}/user/signup`, formData);
      if (data.state === "success") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "註冊成功，即將導向登入頁面。",
        }).then(() => {
          router.push("/user/login");
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "用戶已存在",
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "註冊失敗，將返回登入頁面。",
        }).then(() => {
          router.push("/user/login");
        });
      }
    }
  };

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
          <FaLine
            style={{ color: "#25bd39", cursor: "pointer" }}
            onClick={(e) => {
              handleLineLogin(e, "signup");
            }}
          />
          <FcGoogle
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              handleGoogleLogin(e, "signup");
            }}
          />
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
            value={formData.email}
            onChange={handleUserData}
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
            value={formData.password}
            onChange={handleUserData}
            autoComplete="current-password"
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
            value={formData.passwordcheck}
            onChange={handleUserData}
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
              value={formData.name}
              onChange={handleUserData}
            />
          </div>
          <div className={style.r_login_information}>
            <label htmlFor="username">
              <span>*</span>姓別
            </label>
            <div className={style.information_gender_g}>
              <div
                className={`${style.information_gender} ${
                  formData.gender == "男" ? style.checked : ""
                }`}
              >
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
                  onChange={handleUserData}
                />
              </div>
              <div
                className={`${style.information_gender} ${
                  formData.gender == "女" ? style.checked : ""
                }`}
              >
                <label htmlFor="girl">
                  <TbGenderDemigirl />
                  <div>女</div>
                </label>
                <input
                  id="girl"
                  type="radio"
                  name="gender"
                  value="女"
                  onChange={handleUserData}
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
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleUserData}
            />
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
              value={formData.phone}
              onChange={handleUserData}
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
            value={formData.address}
            onChange={handleUserData}
          />
        </div>
        <div className={style.align}>
          如建立帳號，即代表同意本站隱私權政策和使用條款。
        </div>
        <div className={style.r_register_btn_group}>
          <button
            className="pixel-border-purple bg-color-purple"
            onClick={handleReset}
          >
            重設
          </button>
          <button
            className="pixel-border-purple bg-color-purple"
            onClick={handleSubmit}
          >
            註冊
          </button>
          <button
            className="pixel-border-purple bg-color-purple"
            onClick={() => router.back()}
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
