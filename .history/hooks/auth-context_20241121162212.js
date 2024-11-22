"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export const CreateAuth = createContext(null);

export const AuthContext = ({ children }) => {
  // 會員是否登入判斷
  const [auth, setAuth] = useState(false);
  const [userdata, setUserdata] = useState([]);

  const router = useRouter();
  // 登入
  const handleLogin = async (data) => {
    const res = await axios.post("/api/user", data);
    console.log("res", res);

    if (res.state === "success") {
      router.push("/");
      setAuth(true);
    }
  };
  // 登出
  const handleLogout = async () => {
    setAuth(false);
    setUserdata([]);
    router.push("/");
  };
  // 重新整理時，檢查COOKIE
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const authCookie = cookies.find((cookie) => cookie.startsWith("auth="));
    if (authCookie) {
      setAuth(true);
    }
  }, []);
  // 取得會員資料
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
