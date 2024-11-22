"use client";
import React, { useState, useEffect } from "react";
import style from "./hot-list.module.scss";
import Slider from "react-slick";
import axios from "axios";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { MdAttachMoney } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
export default function HotList() {
  const [slidesToShow, setSlidesToShow] = useState(1.2); // 初始值為 1
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // 根據螢幕寬度設置展示的張數
  const handleResize = () => {
    if (window.innerWidth >= 1400) {
      setSlidesToShow(4);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(2.5);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(1.7);
    } else {
      setSlidesToShow(1.2);
    }
  };
  //Slider 設定
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  // 書本推薦
  const [books, setBooks] = useState([]);
  const getdata = async () => {
    const data = await axios.get("/api/book");
    const sortdata = data.data.sort((a, b) => b.b_sales - a.b_sales); // 依照銷售量排序
    setBooks(sortdata);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className={style.l_hotlist}>
      <div
        className={`${style.hotlist_side} ${style.side_left} bg-purple border-pixel`}
      >
        <div className={`${style.line_block}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
        <div className={`${style.line_block} ${style.line_block_bottom}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </div>

      <div className={`${style.col_hotlist}`}>
        <Slider {...settings} className={style.custom_slider}>
          {books &&
            books.map((v, index) => (
              <div key={v.b_id} className={style.hotlist_card}>
                <div>
                  <span className={style.hotlist_card_rank}>
                    <img alt="rank" src="/images/icon-pixel/no1_1.svg" />
                    <span className="border-pixel-w">
                      <div className="font-s">No.</div>
                      {index + 1}
                    </span>
                  </span>

                  <div
                    className={`${style.hotlist_card_content} pixel-border-purple bg-bright-purple`}
                  >
                    <Link href="/">
                      <img alt="book" src="/images/book/lover.png" />
                    </Link>
                    <div className={style.hotlist_btn_group}>
                      <div className={style.sale_block}>
                        銷售量<span>{v.b_sales}</span>本
                      </div>
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
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <div
        className={`${style.hotlist_side} ${style.side_right} bg-purple border-pixel`}
      >
        <div className={`${style.line_block}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
        <div className={`${style.line_block} ${style.line_block_bottom}`}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </div>
    </div>
  );
}
