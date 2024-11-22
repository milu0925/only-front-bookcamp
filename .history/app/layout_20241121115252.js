import "./globals.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
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
