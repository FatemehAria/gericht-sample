import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.svg";
import Link from "next/link";
import NavbarSeperator from "./NavbarSeperator";

function Navbar() {
  return (
    <nav className="flex flex-row justify-around items-center py-8 text-base">
      <Image src={Logo} alt="logo" className="w-[10%]" />
      <div className="flex flex-row w-[30%] items-center justify-between">
        <Link href="">Home</Link>
        <Link href="">Pages</Link>
        <Link href="">Contact Us</Link>
        <Link href="">Blog</Link>
        <Link href="">Landing</Link>
      </div>
      <div className="flex flex-row w-[20%] justify-between items-center relative">
        <Link href="">Login / Registration</Link>
        <NavbarSeperator />
        <Link href="">Book Table</Link>
      </div>
    </nav>
  );
}

export default Navbar;
