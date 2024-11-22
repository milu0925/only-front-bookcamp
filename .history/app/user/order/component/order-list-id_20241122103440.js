import style from "../../components/user.module.scss";
import { FaUser } from "react-icons/fa";
export default function OrderListID() {
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
            <span>訂單明細</span>
            <button className={style.user_edit_information_return}>返回</button>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>商品圖片</div>
            <div>商品名稱</div>
            <div>商品價格</div>
            <div>商品數量</div>
            <div>商品評價</div>
            <div>商品星數</div>
          </div>
          <div className={style.user_content_list}>
            <div className={style.user_content_list_img}>
              <img src={`/images/book/lover.png`} />
            </div>
            <div>第一桶金</div>
            <div>500</div>
            <div>1</div>
            <div>未評論</div>
            <div>未給星</div>
          </div>
        </div>
      </div>
    </>
  );
}
