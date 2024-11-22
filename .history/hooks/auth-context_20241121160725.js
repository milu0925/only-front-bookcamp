"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const CreateAuth = createContext(null);

export const AuthContext = ({ children }) => {
  // 會員是否登入判斷
  const [auth, setAuth] = useState(false);
  const [userdata, setUserdata] = useState([]);

  // 登入
  const handleLogin = async (data) => {
    const res = await axios.post("/api/user", data);
    if (res.state === "success") {
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
  }, [auth]);
  return (
    <CreateAuth.Provider
      value={{
        auth,
        setAuth,
        userdata,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </CreateAuth.Provider>
  );
};

export const useAuth = () => useContext(CreateAuth);
