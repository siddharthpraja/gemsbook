
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Home/Sidebar";
import Navbar from "@/components/Home/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GEMS MGMT",
  description: "Generated by gEMS MGMT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex-none w-full lg:flex">
            <div className="lg:w-1/5">
              <Sidebar />
            </div>
            <div className="lg:w-4/5">
              <div className="hidden lg:block">
                <Navbar />
              </div>
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
