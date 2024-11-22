import React, { useState, useEffect } from "react";
import style from "./cart.module.scss";
import CartFinishTotal from "./cart-finish-total";
import CartButton from "./Cart-button";
import CartFinishItem from "./cart-finish-item";
import { useRouter } from "next/router";
import { read_one_order } from "@/hooks/call-api";
export default function CartFinish() {
  const router = useRouter();
  const { code: oid } = router.query;
  const [data, setData] = useState([]);
  const getdata = async (oid) => {
    const data = await read_one_order(Number(oid));
    if (data?.state === "success") {
      setData(data.data);
    }
  };
  useEffect(() => {
    getdata(oid);
  }, [oid, router.isReady, router.query]);

  return (
    <div className={style.col_cart_function}>
      <CartFinishItem book={data} />
      <CartFinishTotal user={data} />
      <CartButton />
    </div>
  );
}
