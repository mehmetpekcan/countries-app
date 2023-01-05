import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";

import { MainFont } from "@/lib/fonts";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={MainFont.className}>
      <head />
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
