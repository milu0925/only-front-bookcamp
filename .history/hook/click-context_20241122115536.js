"use client";
import React, { createContext, useState, useContext } from "react";

export const CreateCart = createContext([]);

export const CartContext = ({ children }) => {
  const [click, setClick] = useState([]);

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
