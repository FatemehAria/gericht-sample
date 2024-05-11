import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.svg";
import Link from "next/link";
import NavbarSeperator from "./NavbarSeperator";
import NavbarListSmall from "./NavbarListSmall";

// #a7bb80

function Navbar() {
  return (
    <nav className="flex flex-row justify-between lg:justify-around items-center py-8 text-base">
      <Image src={Logo} alt="logo" className="w-[100px] lg:w-[189px]"/>
      <NavbarListSmall />
      <div className="hidden lg:flex flex-row w-[30%] items-center justify-between text-[#a7bb80]">
        <Link href="" className="hover:border-b hover:border-white hover:text-white">Home</Link>
        <Link href="" className="hover:border-b hover:border-white hover:text-white">Pages</Link>
        <Link href="" className="hover:border-b hover:border-white hover:text-white">Contact Us</Link>
        <Link href="" className="hover:border-b hover:border-white hover:text-white">Blog</Link>
        <Link href="" className="hover:border-b hover:border-white hover:text-white">Landing</Link>
      </div>
      <div className="hidden lg:flex flex-row w-[20%] justify-between items-center relative">
        <Link href="" className="hover:border-b hover:border-[#a7bb80]">Login / Registration</Link>
        <NavbarSeperator />
        <Link href="" className="hover:border-b hover:border-[#a7bb80]">Book Table</Link>
      </div>
    </nav>
  );
}

export default Navbar;
