"use client";
import React, { useEffect, useState } from "react";
import style from "./book.module.scss";
import { MdAttachMoney } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

export default function AllBook() {
  const [books, setBooks] = useState([]);
  const [tag, setTag] = useState("");
  const getdata = async (tag) => {
    const data = await axios.get("/api/book");
    let newdata;
    if (tag === "hot") {
      newdata = data.data.sort((a, b) => b.b_sales - a.b_sales);
    } else if (tag === "new") {
      newdata = data.data.sort((a, b) => b.b_date - a.b_date);
    } else if (tag === "upprice") {
      newdata = data.data.sort((a, b) => b.b_price - a.b_price);
    } else if (tag === "downprice") {
      newdata = data.data.sort((a, b) => a.b_price - b.b_price);
    }
  };
  useEffect(() => {
    getdata(tag);
  }, [tag]);

  return (
    <div className={style.l_all_book}>
      <div
        className={`${style.r_function} pixel-border-purple bg-bright-purple`}
      >
        <div>
          <span>篩選</span>
          <button
            onClick={() => {
              setTag("hot");
            }}
          >
            熱銷
          </button>
          <button
            onClick={() => {
              setTag("new");
            }}
          >
            最新
          </button>
        </div>
        <div>
          <span>價格</span>
          <select
            className="pixel-border-black"
            autoComplete="off"
            onChange={(e) => {
              setTag(e.target.value);
            }}
          >
            <option value="upprice">高到低</option>
            <option value="downprice">低到高</option>
          </select>
        </div>
        <></>
      </div>
      <div className={style.r_books}>
        {books &&
          books.map((v, i) => (
            <div key={v.id} data-id={v.id}>
              <div className={`${style.r_book} pixel-border-white bg-white`}>
                <img
                  alt={`${v.b_title}-${i}`}
                  src={`/images/book/${v.b_img}`}
                />
                <div className={style.r_book_title}>{v.b_title}</div>
                <div className="price-area">
                  <div className="pixel-d-purple bg-dark-purple">
                    <MdAttachMoney />
                    {v.b_price}元
                  </div>
                  <button
                    className="pixel-border-add"
                    onClick={() => {
                      handleAddCart(v);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={style.r_book_pagination}></div>
    </div>
  );
}
