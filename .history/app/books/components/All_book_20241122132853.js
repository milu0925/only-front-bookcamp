"use client";
import React from "react";
import style from "./book.module.scss";
import { MdAttachMoney } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

export default function AllBook() {
  const { click, books, getclickdata } = useClick();

  const [tag, setTag] = useState();

  useEffect(() => {
    getclickdata(tag);
  }, [tag]);
  const handleAddCart = async (datas) => {
    console.log(datas);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "加入購物車成功！",
    });
  };

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
        {book &&
          book.map((v, i) => (
            <div key={i} data-id={i}>
              <div className={`${style.r_book} pixel-border-white bg-white`}>
                <img alt={`${v.b_title}-${i}`} src={`/images/book/lover.png`} />
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
