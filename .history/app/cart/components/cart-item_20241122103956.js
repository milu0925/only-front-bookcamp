"use client";
import React, { useState } from "react";
import style from "./cart.module.scss";
import { TbHttpDelete } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { MdHorizontalRule } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
export default function CartItem() {
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

  const [cart, setCart] = useState([
    {
      c_id: 1,
      b_title: "The Great Gatsby",
      b_genre: "藝術設計",
      b_price: 500,
      c_count: 1,
    },
  ]);

  const handleAdjustCount = async (datas, tag) => {
    if (tag === "add") {
      cart.map((item) =>
        item.c_id === datas.c_id
          ? { ...item, c_count: Number(item.c_count) + 1 }
          : item
      );
    } else {
      cart.map((item) =>
        item.c_id === datas.c_id
          ? { ...item, c_count: Number(item.c_count) - 1 }
          : item
      );
    }
  };
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
        {cart.map((v, i) => (
          <div className={`${style.cart_item_content_book} `} key={i}>
            <input
              type="checkbox"
              onChange={(e) => {
                handleCheckbox(e, v);
              }}
            />
            <img src={`/images/book/lover.png`} />
            <div className={style.cart_item_title}>
              <div>forjgt</div>
              <div>文學小說</div>
            </div>
            <div className={style.cart_item_price}>
              <MdAttachMoney />
              500
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
        ))}
      </div>
    </div>
  );
}
