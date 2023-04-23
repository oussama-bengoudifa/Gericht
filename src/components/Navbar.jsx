import { useState } from "react";

import { logo } from "../assets";

import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const close = () => setOpened(false);

  const open = () => setOpened(true);

  return (
    <header className="padding">
      <nav className="flex justify-between items-center">
        <img src={logo} className="object-container md:h-14 h-10" />
        <ul className="text md:flex hidden lg:gap-8 gap-5">
          <li className="hover:text-golden duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-golden duration-300">
            <a href="/">Pages</a>
          </li>
          <li className="hover:text-golden duration-300">
            <a href="/">Contact</a>
          </li>
          <li className="hover:text-golden duration-300">
            <a href="/">Blog</a>
          </li>
        </ul>
        <div className="text md:flex hidden items-center lg:gap-8 gap-5 capitalize font-semibold tracking-wider">
          <a href="/" className="hover:text-golden duration-300">
            login
          </a>
          <div className="w-[0.25px] h-7 bg-golden rounded-2xl opacity-50"></div>
          <a href="/" className="hover:text-golden duration-300">
            book table
          </a>
        </div>
        <div className="md:hidden block">
          <HiOutlineMenu onClick={open} fontSize={27} color="#fff" />
          {opened && (
            <div className="inset-0 bg-black fixed w-full h-screen duration-500 z-10">
              <div className="absolute right-0 m-4">
                <MdOutlineRestaurantMenu
                  onClick={close}
                  color="#DCCA87"
                  fontSize={27}
                />
              </div>
              <ul className="text flex flex-col h-full items-center justify-center gap-8">
                <li className="hover:text-golden duration-300">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-golden duration-300">
                  <a href="/">Pages</a>
                </li>
                <li className="hover:text-golden duration-300">
                  <a href="/">Contact</a>
                </li>
                <li className="hover:text-golden duration-300">
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
