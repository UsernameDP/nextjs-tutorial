import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WikiRocket",
  description: "small-project for nextjs tutorial"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="w-full h-full"
    >
      <body
        className={
          inter.className +
          "min-w-full h-full bg-slate-700 relative flex flex-col"
        }
      >
        <Navbar />
        <main className="flex-auto p-5">{children}</main>
      </body>
    </html>
  );
}
