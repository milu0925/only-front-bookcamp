import "./globals.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
