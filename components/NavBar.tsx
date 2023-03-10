"use client";

import { navLinks } from "@/config/config";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MyLogo from "../assets/MyLogo.png";
import { RiMenu2Fill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [navShadow, setNavShadow] = useState<boolean>(false);

  console.log(navShadow);

  const handleOpenMobileMenu = (): any => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 150) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, [navShadow]);

  return (
    <div
      className={`fixed bg-dark h-20 md:h-24 w-full px-5 md:px-12 text-light ${
        navShadow ? "shadow-md shadow-primary " : " "
      } `}
    >
      <div className="h-full w-full flex items-center justify-between">
        <Image
          title="Marvinel Santos"
          src={MyLogo}
          alt="Logo"
          className="cursor-pointer w-12 md:w-16 shadow-md hover:scale-105 duration-300 ease-in shadow-primary rounded-md"
        />
        <ul className="hidden md:flex items-center md:gap-5 lg:gap-8">
          {navLinks.map(({ id, link }) => (
            <li
              className=" capitalize tracking-wider cursor-pointer hover:text-primary even:hover:text-secondary duration-300 ease-in hover:scale-105 font-light"
              key={id}
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          onClick={handleOpenMobileMenu}
          className="md:hidden cursor-pointer"
        >
          <RiMenu2Fill size={27} />
        </div>
      </div>
      <div className="md:hidden">
        <MobileMenu
          openMobileMenu={openMobileMenu}
          handleOpenMobileMenu={handleOpenMobileMenu}
        />
      </div>
    </div>
  );
}

export default NavBar;
