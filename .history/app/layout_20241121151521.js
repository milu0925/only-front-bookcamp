import "./globals.scss";
import Image from "next/image";

import { CartContext } from "@/hooks/cart-context";
import { AuthContext } from "@/hooks/auth-context";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
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
        </AuthContext>
      </body>
    </html>
  );
}
