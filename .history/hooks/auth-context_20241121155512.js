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
    if (data.state === "success") {
      setAuth(true);
    }
  };
  // 登出
  const handleLogout = async () => {
    setAuth(false);
    setUserdata([]);
  };
  //取得
  const getdata = async () => {
    const data = await axios.get("/api/user");
    setUserdata(data);
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
