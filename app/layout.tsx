import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gericht Restaurant",
  description: "Developed by Ariana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-white bg-black">
      <body className={OpenSans.className}>
        <Navbar />
        <div className="w-[80%] mx-auto px-5">{children}</div>
      </body>
    </html>
  );
}
