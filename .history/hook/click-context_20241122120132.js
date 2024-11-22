"use client";
import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react/cjs/react.production.min";

export const CreateCart = createContext([]);

export const CartContext = ({ children }) => {
  const [click, setClick] = useState([]);
  const bookdata = [
    { id: 1, name: "藝術設計" },
    { id: 2, name: "人文社科" },
    { id: 4, name: "自然科普" },
    { id: 5, name: "醫療保健" },
    { id: 6, name: "生活風格" },
    { id: 7, name: "旅遊" },
    { id: 8, name: "輕小說" },
    { id: 9, name: "漫畫/圖文書" },
    { id: 10, name: "語言學習" },
    { id: 11, name: "考試用書" },
    { id: 12, name: "電腦資訊" },
    { id: 13, name: "其他" },
  ];
  useEffect(() => {
    const getdata = async () => {
      let newdata = book;
      if (click) {
        newdata = newdata.filter((v) => v.b_genre === click);
      }
      if (tag === "hot") {
        newdata = newdata.sort((a, b) => b.b_sales - a.b_sales);
      } else if (tag === "new") {
        newdata = newdata.sort((a, b) => b.b_date - a.b_date);
      } else if (tag === "upprice") {
        newdata = newdata.sort((a, b) => b.b_price - a.b_price);
      } else if (tag === "downprice") {
        newdata = newdata.sort((a, b) => a.b_price - b.b_price);
      }
    };
  }, [click]);
  return (
    <CreateCart.Provider
      value={{
        click,
        setClick,
      }}
    >
      {children}
    </CreateCart.Provider>
  );
};

// 輸出
export const useClick = () => useContext(CreateCart);
