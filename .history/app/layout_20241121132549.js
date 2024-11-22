import "./globals.scss";
import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}