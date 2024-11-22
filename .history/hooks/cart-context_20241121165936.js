"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "./auth-context";
export const CreateCart = createContext([]);

export const CartContext = ({ children }) => {
  const { auth } = useAuth();
  const [cart, setCart] = useState([]);
  // 取得購物車資訊
  const getdata = async () => {
    const res = await axios.post("/api/cart", id);
  };

  // 加入購物車
  const handleAddCart = async (datas) => {
    try {
      // 假如有登入會員
      if (auth.isAuth) {
        sessionStorage.removeItem("cart");
        const { data } = await axios.post(`${domain}/cart/add`, datas, {
          withCredentials: true,
        });

        if (data.state === "success") {
          setCart(data.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "加入購物車成功！",
          });
        }
      } else {
        // 假如沒有登入會員
        // 先檢查session是否有相同的產品
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const sameCartid = cart.filter((item) => item.b_id === datas.b_id);

        let mycart;
        if (sameCartid.length > 0) {
          // 有一樣的東西要直接增加他的c_count
          mycart = cart.map((item) =>
            item.b_id === datas.b_id
              ? { ...item, c_count: Number(sameCartid[0].c_count) + 1 }
              : item
          );
        } else {
          // 如果是新加入的產品
          mycart = [...cart, { ...datas, c_count: 1 }];
        }
        sessionStorage.setItem("cart", JSON.stringify(mycart));
        setCart(mycart);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "加入購物車成功！",
        });
      }
    } catch (error) {
      // 未登入和驗證身分失敗
      if (error.response.status === 401 || error.response.status === 403) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "請登入會員！",
        });
      }
    }
  };
  // 購物車 調整數量
  const handleAdjustCount = async (datas, tag) => {
    try {
      // 假如有登入會員
      if (auth.isAuth) {
        sessionStorage.removeItem("cart");
        const { data } = await axios.post(
          `${domain}/cart/update`,
          { ...datas, tag: tag },
          {
            withCredentials: true,
          }
        );
        if (data.state === "success") {
          setCart(data.data);
        }
      } else {
        // 假如沒有登入會員
        // 先檢查session是否有相同的產品
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        let mycart;
        if (tag === "add") {
          mycart = cart.map((item) =>
            item.b_id === datas.b_id
              ? { ...item, c_count: Number(item.c_count) + 1 }
              : item
          );
        } else if (tag === "sub") {
          mycart = cart
            .map((item) =>
              item.b_id === datas.b_id
                ? { ...item, c_count: Number(item.c_count) - 1 }
                : item
            )
            .filter((item) => item.c_count > 0);
        } else if (tag === "del") {
          mycart = cart.filter((item) => item.b_id !== datas.b_id);
        }
        sessionStorage.setItem("cart", JSON.stringify(mycart));
        setCart(mycart);
      }
    } catch (error) {
      // 未登入和驗證身分失敗
      if (error.response.status === 401 || error.response.status === 403) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "請登入會員！",
        });
      }
    }
  };

  // 假如非會員身分可以加入購物車，把東西都存入session，如果登入後就把seesion的資料灌進去會員裡(然後清除session)
  return (
    <CreateCart.Provider
      value={{
        cart,
        setCart,
        handleAddCart,
        handleAdjustCount,
      }}
    >
      {children}
    </CreateCart.Provider>
  );
};

// 輸出
export const useCart = () => useContext(CreateCart);
