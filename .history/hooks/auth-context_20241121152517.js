"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const CreateAuth = createContext(null);

export const AuthContext = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  // // 會員是否登入判斷
  // const [auth, setAuth] = useState({ isAuth: false });
  // // 會員資料
  // const [userData, setUserData] = useState({});

  // // 檢驗會員身分
  // const checkAuth = async () => {
  //   try {
  //     const { data } = await axios.get(`${domain}/user/check-auth`, {
  //       withCredentials: true,
  //     });
  //     if (data.state === "success") {
  //       // 驗證成功，把資料寫入
  //       setAuth({ isAuth: true });
  //       getUserData();
  //     } else {
  //       if (protectedRoutes.includes(router.pathname)) {
  //         router.push("/user/login");
  //       }
  //     }
  //   } catch (error) {
  //     if (
  //       error.response?.data.message === "未登入" &&
  //       error.response?.status === 401
  //     ) {
  //       if (protectedRoutes.includes(router.pathname)) {
  //         router.push("/user/login");
  //       }
  //     }
  //   }
  // };

  // const loginSuccess = async (token) => {
  //   if (token) {
  //     await getUserData();
  //     setAuth({ isAuth: true });
  //     // 假如未登入狀態下購物車有東西
  //     const cartitem = JSON.parse(sessionStorage.getItem("cart"));
  //     await pushInUserCartItems(cartitem).then((v) => {
  //       if (v?.state === "success") {
  //         // 清除session資料
  //         sessionStorage.removeItem("cart");
  //       }
  //     });
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "登入成功，即將導向至首頁。",
  //       showConfirmButton: false,
  //       timer: 1000,
  //     });
  //     router.push("/");
  //   }
  // };
  // // 一般登入
  // const handleLogin = async (e, checkForm, user) => {
  //   e.preventDefault();
  //   if (!(await checkForm())) {
  //     return;
  //   }

  //   try {
  //     const { data } = await axios.post(`${domain}/user/login`, user, {
  //       withCredentials: true,
  //     });
  //     if (data.state === "success") {
  //       await loginSuccess(data.token);
  //     }
  //   } catch (error) {
  //     const errorMessage = error.response?.data?.message;
  //     if (errorMessage) {
  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: errorMessage,
  //       });
  //     }
  //   }
  // };

  // // 登出
  // const handleLogout = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       `${domain}/user/logout`,
  //       {},
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     if (data.state === "success") {
  //       setAuth({ isAuth: false });
  //       setUserData({});
  //       sessionStorage.removeItem("cart");
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     router.push("/");
  //   }
  // };
  // // 存會員資料
  // const getUserData = async () => {
  //   const { data } = await get_user();
  //   setUserData(data);
  // };

  // didMount(初次渲染)後，向伺服器要求檢查會員是否登入中
  useEffect(() => {
    checkAuth();
  }, [router.isReady, router.pathname]);

  return (
    <CreateAuth.Provider
      value={
        {
          // auth,
          // setAuth,
          // userData,
          // handleLogin,
          // handleLogout,
          // handleGoogleLogin,
          // handleLineLogin,
          // loginSuccess,
          // getUserData,
        }
      }
    >
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
