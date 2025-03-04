import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Example Web",
  description: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="dark">
          <div className="layout">
            {children}
        </div>
      </body>
    </html>
  );
}
