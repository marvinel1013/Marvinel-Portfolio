import Image from "next/image";
import React from "react";
import MyLogo from "../assets/MyLogo.png";
import { IoClose } from "react-icons/io5";
import { navLinks } from "@/config/config";
import ReusableText from "./Reusable/ReusableText";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

type Props = {
  openMobileMenu: boolean;
  handleOpenMobileMenu: any;
};

function MobileMenu({ openMobileMenu, handleOpenMobileMenu }: Props) {
  const icons = [
    <MdOutlineEmail />,
    <FaFacebook />,
    <FaLinkedinIn />,
    <FaGithub />,
    <BsFillPersonLinesFill />,
  ];

  return (
    <div
      className={
        openMobileMenu
          ? "fixed bg-gray-800/10 backdrop-blur  top-0 left-0 h-full w-full"
          : " "
      }
    >
      <div
        className={
          openMobileMenu
            ? "text-light p-3 px-5 fixed bg-dark top-0 left-0 h-full w-[77%] sm:w-[55%] shadow-lg shadow-secondary duration-500 ease-in"
            : "text-light p-3 px-5 fixed bg-dark top-0 left-[-100%] h-full w-[77%] sm:w-[55%] shadow-lg shadow-secondary duration-500 ease-in"
        }
      >
        <div className="flex justify-between items-center mb-12">
          <Image
            onClick={handleOpenMobileMenu}
            src={MyLogo}
            alt="Logo"
            className="w-12 shadow-lg shadow-primary rounded-md"
          />
          <div
            onClick={handleOpenMobileMenu}
            className="p-2.5 text-secondary flex items-center shadow-lg shadow-secondary rounded-full"
          >
            <IoClose size={20} />
          </div>
        </div>
        <div className="uppercase border-b pb-4 border-primary tracking-wider text-center">
          Let's build something Together.
        </div>
        <ul className="mt-7 flex flex-col gap-3">
          {navLinks.map(({ id, link }) => (
            <li className="uppercase tracking-wider" key={id}>
              {link}
            </li>
          ))}
        </ul>
        <div className="text-lg font-bold tracking-tight mt-10">
          <ReusableText>LET'S CONNECT</ReusableText>
        </div>
        <ul className="flex items-center gap-3 mt-5">
          {icons.map((icon, index) => (
            <li
              className="text-xl shadow-md even:shadow-secondary shadow-primary p-2.5 rounded-full"
              key={index}
            >
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
