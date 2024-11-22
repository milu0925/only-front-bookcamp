"use client";
import React, { useState } from "react";
import style from "./cart.module.scss";
import { TbHttpDelete } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { MdHorizontalRule } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { useCart } from "@/hooks/cart-context";
export default function CartItem({ setOrder }) {
  const [closeContent, setCloseContent] = useState(true);

  // 添加購買的書籍
  const handleCheckbox = (e, item) => {
    if (e.target.checked) {
      setOrder((prev) => ({ ...prev, books: [...prev.books, item] }));
    } else {
      setOrder((prev) => ({
        ...prev,
        books: [...prev.books.filter((v) => v.c_id !== item.c_id)],
      }));
    }
  };

  cart = [
    {
      c_id: 1,
      b_title: "The Great Gatsby",
      b_genre: "藝術設計",
      b_price: 500,
      c_count: 1,
    },
  ];

  return (
    <div className={style.col_cart_item}>
      <button
        onClick={() => {
          setCloseContent(!closeContent);
        }}
        className={style.cart_item_header}
      >
        {closeContent ? <FaCaretUp /> : <FaCaretDown />}
        點擊後，收起下方內容
        {closeContent ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      <div
        className={`${style.cart_item_content} ${
          closeContent ? style.open : style.close
        }`}
      >
        {cart.length > 0 ? (
          cart.map((v) => (
            <div
              className={`${style.cart_item_content_book} `}
              key={v.c_id}
              value={v.c_id}
            >
              <input
                type="checkbox"
                onChange={(e) => {
                  handleCheckbox(e, v);
                }}
              />
              <img src={`/images/book/${v.b_img}`} />
              <div className={style.cart_item_title}>
                <div>{v.b_title}</div>
                <div>{v.b_genre}</div>
              </div>
              <div className={style.cart_item_price}>
                <MdAttachMoney />
                {v.b_price}
              </div>

              <div className={style.cart_item_quantity}>
                <button
                  className="pixel-border-add"
                  onClick={() => {
                    handleAdjustCount(v, "sub");
                  }}
                >
                  <MdHorizontalRule />
                </button>
                <input
                  type="number"
                  value={v.c_count}
                  className="input-box-all"
                  readOnly
                />
                <button
                  className="pixel-border-add"
                  onClick={() => {
                    handleAdjustCount(v, "add");
                  }}
                >
                  <IoMdAdd />
                </button>
              </div>
              <button
                className={style.cart_item_delete}
                onClick={() => {
                  handleAdjustCount(v, "del");
                }}
              >
                <TbHttpDelete />
              </button>
            </div>
          ))
        ) : (
          <div className={style.cart_empty}>購物車是空的！</div>
        )}
      </div>
    </div>
  );
}
