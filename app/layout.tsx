import "./globals.css";

import { Inter } from "next/font/google";

import AuthContext from "./AuthContext";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthContext>
          <Navbar />
          <main className="-mt-16">{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
