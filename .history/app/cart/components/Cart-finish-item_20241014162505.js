import React, { useState } from "react";
import style from "./cart.module.scss";
import { MdAttachMoney } from "react-icons/md";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function CartFinishItem({ book }) {
  const [closeContent, setCloseContent] = useState(true);

  return (
    <div className={`${style.col_cart_item} ${style.w100}`}>
      <button
        onClick={() => setCloseContent(!closeContent)}
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
        {book
          ? book?.detail?.map((v) => (
              <div className={`${style.cart_item_content_book} `} key={v.od_id}>
                <img src={`/images/book/${v.b_img}`} />
                <div className={style.cart_item_title}>
                  <div>{v.b_title}</div>
                  <div>{v.b_genre}</div>
                </div>
                <div className={style.cart_item_price}>
                  <MdAttachMoney />
                  {v.b_price}
                </div>

                <div className={style.cart_item_quantity}>X{v.od_count}</div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
