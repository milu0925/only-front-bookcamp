"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const CreateAuth = createContext(null);

export const AuthContext = ({ children }) => {
  // 會員是否登入判斷
  const [auth, setAuth] = useState(false);
  const [userdata, setUserdata] = useState([]);

  const loginSuccess = async (token) => {
    if (token) {
      await getUserData();
      setAuth({ isAuth: true });
      // 假如未登入狀態下購物車有東西
      const cartitem = JSON.parse(sessionStorage.getItem("cart"));
      await pushInUserCartItems(cartitem).then((v) => {
        if (v?.state === "success") {
          // 清除session資料
          sessionStorage.removeItem("cart");
        }
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "登入成功，即將導向至首頁。",
        showConfirmButton: false,
        timer: 1000,
      });
      router.push("/");
    }
  };
  // 一般登入
  const handleLogin = async (data) => {
    const data = await axios.post("/api/user", data);
    setAuth(data);

    e.preventDefault();
    if (!(await checkForm())) {
      return;
    }

    try {
      const { data } = await axios.post(`${domain}/user/login`, user, {
        withCredentials: true,
      });
      if (data.state === "success") {
        await loginSuccess(data.token);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      if (errorMessage) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
        });
      }
    }
  };
  // 登出
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        `${domain}/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (data.state === "success") {
        setAuth({ isAuth: false });
        setUserData({});
        sessionStorage.removeItem("cart");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  };
  // 存會員資料
  const getUserData = async () => {
    const { data } = await get_user();
    setUserData(data);
  };

  //取得
  const getdata = async () => {
    const data = await axios.get("/api/user");
    setAuth(data);
  };
  useEffect(() => {
    if (auth) {
      getdata();
    }
  }, []);
  return (
    <CreateAuth.Provider
      value={{
        auth,
        setAuth,
        userdata,
        handleLogin,
        handleLogout,
        loginSuccess,
        getUserData,
      }}
    >
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
