import React from "react";
import style from "./cart.module.scss";
import { useRouter } from "next/navigation";
export default function CartButton({ name, handlePay }) {
  const router = useRouter();
  const handleReturn = () => {
    router.push("/books");
  };
  return (
    <div className={style.r_cart_btn}>
      <button className="pixel-border-yellow bg-yellow" onClick={handleReturn}>
        返回購物
      </button>
      {name && (
        <button className="pixel-border-yellow bg-yellow" onClick={handlePay}>
          {name}
        </button>
      )}
    </div>
  );
}
