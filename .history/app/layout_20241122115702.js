import "./globals.scss";
import "./input.scss";
import "./animation.scss";
import Image from "next/image";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { CartContext } from "@/hook/click-context";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartContext>
          <Header />
          <Navbar />
          {children}
          <Image
            id="bgVideo"
            src="/images/bg1.gif"
            alt="Background Animation"
            width={1000}
            height={1000}
          ></Image>
        </CartContext>
      </body>
    </html>
  );
}
