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

  const books = [
    {
      b_id: 1,
      b_title: "The Great Gatsby",
      b_price: 500,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 8690,
      b_date: "2024-07-22",
    },
    {
      b_id: 2,
      b_title: "Business Secrets",
      b_price: 400,
      b_img: "lover.png",
      b_genre: "醫療保健",
      b_sales: 876,
      b_date: "2024-08-22",
    },
    {
      b_id: 3,
      b_title: "Social Science 101",
      b_price: 200,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 123,
      b_date: "2023-04-29",
    },
    {
      b_id: 4,
      b_title: "Mind Over Matter",
      b_price: 200,
      b_img: "lover.png",
      b_genre: "自然科普",
      b_sales: 4537,
      b_date: "2022-02-22",
    },
    {
      b_id: 5,
      b_title: "Learn a New Language",
      b_price: 200,
      b_img: "lover.png",
      b_genre: "生活風格",
      b_sales: 5,
      b_date: "2022-12-25",
    },
    {
      b_id: 6,
      b_title: "Advanced Programming",
      b_price: 600,
      b_img: "lover.png",
      b_genre: "旅遊",
      b_sales: 1500,
      b_date: "2024-01-15",
    },
    {
      b_id: 7,
      b_title: "Python Mastery",
      b_price: 450,
      b_img: "lover.png",
      b_genre: "輕小說",
      b_sales: 2300,
      b_date: "2023-05-10",
    },
    {
      b_id: 8,
      b_title: "Graphic Design Fundamentals",
      b_price: 350,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 3000,
      b_date: "2024-06-18",
    },
    {
      b_id: 9,
      b_title: "Business Strategy for Entrepreneurs",
      b_price: 520,
      b_img: "lover.png",
      b_genre: "醫療保健",
      b_sales: 1200,
      b_date: "2023-11-30",
    },
    {
      b_id: 10,
      b_title: "Mental Health Awareness",
      b_price: 320,
      b_img: "lover.png",
      b_genre: "電腦資訊",
      b_sales: 1500,
      b_date: "2024-02-05",
    },
    {
      b_id: 11,
      b_title: "Marketing Secrets",
      b_price: 500,
      b_img: "lover.png",
      b_genre: "其他",
      b_sales: 1800,
      b_date: "2023-07-14",
    },
    {
      b_id: 12,
      b_title: "Philosophy for Beginners",
      b_price: 250,
      b_img: "lover.png",
      b_genre: "考試用書",
      b_sales: 400,
      b_date: "2022-09-09",
    },
    {
      b_id: 13,
      b_title: "Financial Freedom",
      b_price: 600,
      b_img: "lover.png",
      b_genre: "漫畫/圖文書",
      b_sales: 950,
      b_date: "2024-04-11",
    },
    {
      b_id: 14,
      b_title: "Photography 101",
      b_price: 300,
      b_img: "lover.png",
      b_genre: "語言學習",
      b_sales: 5000,
      b_date: "2024-03-20",
    },
    {
      b_id: 15,
      b_title: "AI for Beginners",
      b_price: 700,
      b_img: "lover.png",
      b_genre: "旅遊",
      b_sales: 1000,
      b_date: "2024-05-10",
    },
    {
      b_id: 16,
      b_title: "Data Science Essentials",
      b_price: 550,
      b_img: "lover.png",
      b_genre: "輕小說",
      b_sales: 1200,
      b_date: "2023-12-02",
    },
    {
      b_id: 17,
      b_title: "Leadership Skills",
      b_price: 420,
      b_img: "lover.png",
      b_genre: "人文社科",
      b_sales: 1100,
      b_date: "2024-01-10",
    },
    {
      b_id: 18,
      b_title: "Self-Improvement Journey",
      b_price: 250,
      b_img: "lover.png",
      b_genre: "自然科普",
      b_sales: 2300,
      b_date: "2022-10-12",
    },
    {
      b_id: 19,
      b_title: "Understanding Psychology",
      b_price: 350,
      b_img: "lover.png",
      b_genre: "人文社科",
      b_sales: 1500,
      b_date: "2023-08-05",
    },
    {
      b_id: 20,
      b_title: "The Art of War",
      b_price: 450,
      b_img: "lover.png",
      b_genre: "人文社科",
      b_sales: 3000,
      b_date: "2024-02-15",
    },
    {
      b_id: 21,
      b_title: "The Science of Happiness",
      b_price: 390,
      b_img: "lover.png",
      b_genre: "生活風格",
      b_sales: 2400,
      b_date: "2023-11-22",
    },
    {
      b_id: 22,
      b_title: "Mastering Leadership",
      b_price: 520,
      b_img: "lover.png",
      b_genre: "旅遊",
      b_sales: 850,
      b_date: "2024-03-05",
    },
    {
      b_id: 23,
      b_title: "Art of Creative Thinking",
      b_price: 450,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 2000,
      b_date: "2024-06-01",
    },
    {
      b_id: 24,
      b_title: "Understanding Human Behavior",
      b_price: 300,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 1300,
      b_date: "2023-10-25",
    },
    {
      b_id: 25,
      b_title: "The Digital Marketing Handbook",
      b_price: 650,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 1750,
      b_date: "2024-07-01",
    },
  ];

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
          {books.map((v, i) => (
            <div key={i} className={style.hotlist_card}>
              <div>
                <span className={style.hotlist_card_rank}>
                  <img alt="rank" src="/images/icon-pixel/no1_1.svg" />
                  <span className="border-pixel-w">
                    <div className="font-s">No.</div>
                    {i + 1}
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
