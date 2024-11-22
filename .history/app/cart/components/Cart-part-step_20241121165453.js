"use client";
import React from "react";
import style from "./cart.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
export default function CartPartStep({ icon, name, isActive }) {
  const renderIcon = (icon) => {
    if (icon === "data") {
      return <LuClipboardList />;
    } else if (icon === "ok") {
      return <FaCheck />;
    }
  };

  return (
    <div
      className={`${style.cart_part_step} ${
        isActive === "data" && icon === "ok" ? style.default : style.active
      }`}
    >
      {isActive === icon && (
        <img alt="diamond" src="/images/icon-pixel/diamond.svg" />
      )}
      {renderIcon(icon)}
      <span>{name}</span>
      {isActive === icon && (
        <img alt="diamond" src="/images/icon-pixel/diamond.svg" />
      )}
    </div>
  );
}
