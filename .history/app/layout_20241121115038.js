import "./globals.scss";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
