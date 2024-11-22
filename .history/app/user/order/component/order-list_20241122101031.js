"use client";
import React, { useState } from "react";
import style from "../../components/user.module.scss";
import { FaUser } from "react-icons/fa";
export default function OrderList() {
  const [orderdata, setOrderdata] = useState([]);

  // 目前頁面
  const [ctPage, setctPage] = useState(1);
  // 每頁顯示資料數量
  const PerPage = 5;
  // 計算顯示資料的範圍
  const indexOfLastItem = ctPage * PerPage; //當前頁最後一筆資料的索引。
  const indexOfFirstItem = indexOfLastItem - PerPage; //當前頁第一筆資料的索引。
  const currentOrders = orderdata.slice(indexOfFirstItem, indexOfLastItem); // 拆分好分頁的顯示物

  const handleDetail = async (id) => {};
  // 前往付款畫面
  const handlePay = async (url) => {};
  return (
    <>
      <div
        className={`${style.col_user_order} bg-color-purple pixel-border-purple`}
      >
        <div
          className={`${style.user_title_block} ${style.user_edit_information_title}`}
        >
          <div>
            <FaUser />
            <span>我的訂單</span>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>訂單編號</div>
            <div>訂單日期</div>
            <div>消費金額</div>
            <div>付款方式</div>
            <div>訂單狀態</div>
            <div>其他</div>
          </div>
          <div className={style.user_content_list}>
            <div className={style.uid}>IFYNEE1580100001</div>
            <div className={style.date}>2024-10-15</div>
            <div>500</div>
            <div>linepay</div>
            <div>未付款</div>
            <div className={style.fn_group}>
              <button
                className={style.view_detail}
                onClick={() => {
                  handleDetail(v.o_id);
                }}
              >
                查看明細
              </button>
              <button>前往付款</button>
            </div>
          </div>
        </div>
        <Pagination
          total={orderdata}
          ctPage={ctPage}
          setctPage={setctPage}
          PerPage={PerPage}
        />
      </div>
    </>
  );
}
