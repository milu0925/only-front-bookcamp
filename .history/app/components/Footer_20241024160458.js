import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
import { FaCcApplePay } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { PiWarningCircleFill } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  const hideFooter = ["/user", "/user/login", "/user/register"].includes(
    router.pathname
  );

  if (hideFooter) {
    return null;
  }
  return (
    <div className={style.footer}>
      <div className={style.footer_top}>
        <div>
          <div className={style.footer_top_list}>
            <div className={style.footer_logo}>
              <img alt="logo" src="/images/logo.jpg" />
              <div className={style.footerDonate}>
                <div>
                  <FaCcApplePay />
                </div>
                <div>
                  <FaGoogle />
                </div>
                <div>
                  <FaLine />
                </div>
                <div>
                  <FaCcVisa />
                </div>
              </div>
            </div>
            <div className={style.footer_text}>
              <ul>
                <li>關於我們</li>
                <li>
                  <Link href="#/">關於我們</Link>
                </li>
                <li>
                  <Link href="#/">企業歷史</Link>
                </li>
                <li>
                  <Link href="#/">價值觀</Link>
                </li>
                <li>
                  <Link href="#/">合作夥伴</Link>
                </li>
              </ul>
              <ul>
                <li>客服幫助</li>
                <li>
                  <Link href="#/">消費問題</Link>
                </li>
                <li>
                  <Link href="#/">會員等級</Link>
                </li>
                <li>
                  <Link href="#/">消費權益</Link>
                </li>
                <li>
                  <Link href="#/">常見Q&A</Link>
                </li>
              </ul>
              <ul>
                <li>購物資訊</li>
                <li>
                  <Link href="#/">優惠券取得</Link>
                </li>
                <li>
                  <Link href="#/">關於上架</Link>
                </li>
                <li>
                  <Link href="#/">購物流程</Link>
                </li>
              </ul>
              <ul>
                <li>服務條款</li>
                <li>
                  <Link href="#/">使用者條款</Link>
                </li>
                <li>
                  <Link href="#/">交易紀錄</Link>
                </li>
                <li>
                  <Link href="#/">版權聲明</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 免責聲明 */}
      <div>
        <ul className={style.statement}>
          <li>
            <PiWarningCircleFill />
            免責聲明
          </li>
          <li>歡迎使用本網站。請在使用本網站之前閱讀本免責聲明。</li>
          <li>
            1.
            本網站僅用於練習和教育目的。網站內容可能包含不準確、過時或不完整的資訊，並且可能不應被視為正式的參考來源。我們不對網站內容的準確性、完整性、實用性或可靠性提供任何保證。
          </li>
          <li>
            2.
            本網站的內容僅代表作者的觀點和意見，並不代表任何組織、公司或個人的立場。
          </li>
          <li>
            3.
            使用本網站內容所引起的任何決策或行動均由使用者自行承擔，我們不對使用者根據網站內容做出的任何決定承擔責任。
          </li>
          <li>
            4.
            本網站可能包含指向其他外部網站或資源的連結，我們不對這些外部連結的內容負責，並且不對由於使用或依賴這些連結而導致的任何損失或損害負責。
          </li>
          <li>
            5. 我們保留隨時更改本網站內容、終止網站運營或更改免責聲明的權利。
          </li>
          <li>
            6.本免責聲明受到所在地區法律的約束。如有疑問，請諮詢專業的法律顧問。
          </li>
          <li>
            如果您繼續使用本網站，即表示您接受並同意本免責聲明的條款和條件。如果您不同意這些條款，請立即停止使用本網站。
            如有任何疑問或疑慮，請通過 該電話:09******** 與我們聯繫。
          </li>
        </ul>
      </div>
      {/* 版權 */}
      <div className={style.footer_copyright}>
        <hr />
        <div>
          <FaRegCopyright />
          2023書營購物網 版權沒有 翻印必究
        </div>
      </div>
    </div>
  );
}
