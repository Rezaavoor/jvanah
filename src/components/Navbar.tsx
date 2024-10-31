"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { use, useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change 50 to whatever scroll threshold you want
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen fixed transition-all duration-500 ease-in-out bg-lighterGreen
      ${isScrolled ? "border-b-[1px] border-primaryGreen" : "border-none"}
       z-50`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between p-2 lg:p-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-end space-x-2 text-2xl font-medium text-primary transition-all duration-500 ease-in-out hover:scale-125 relative w-14 h-14 ">
            <span>
              <Image
                src="/img/jvanah/logo.svg"
                fill={true}
                alt="N"
                className="w-16"
              />
            </span>
          </span>
        </Link>

        {/* get started  */}
        {/* <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
        </div> */}

        <Disclosure>
          {({ open, close }) => (
            <>
              <DisclosureButton
                aria-label="Toggle Menu"
                className="px-2 py-1 text-primary rounded-md lg:hidden hover:text-secondary focus:text-primaryGreen focus:bg-lightGreen focus:outline-none transition-all duration-200 ease-in-out"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </DisclosureButton>

              <Transition
                show={open}
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <DisclosurePanel className="flex flex-col w-full mt-2 bg-lightGreen shadow-lg rounded-lg lg:hidden">
                  <Link
                    href="/about"
                    onClick={close}
                    className="w-full px-4 py-2 text-primary hover:bg-gray-100 focus:bg-gray-100 rounded-t-lg"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    onClick={close}
                    className="w-full px-4 py-2 text-primary hover:bg-gray-100 focus:bg-gray-100"
                  >
                    What We Do
                  </Link>
                  <Link
                    href="/"
                    onClick={close}
                    className="w-full px-4 py-2 text-primary hover:bg-gray-100 focus:bg-gray-100 rounded-b-lg"
                  >
                    How To Support
                  </Link>
                </DisclosurePanel>
              </Transition>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link
                href="/about"
                className="inline-block px-4 py-2 text-lg font-normal text-primary no-underline rounded-md  hover:bg-primary hover:text-lighterGreen focus:text-lighterGreen focus:bg-primary focus:outline-none transition-all duration-200 ease-in-out"
              >
                {"About Us"}
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/"
                className="inline-block px-4 py-2 text-lg font-normal text-primary no-underline rounded-md  hover:bg-primary hover:text-lighterGreen focus:text-lighterGreen focus:bg-primary focus:outline-none transition-all duration-200 ease-in-out"
              >
                {"What We Do"}
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/"
                className="inline-block px-4 py-2 text-lg font-normal text-primary no-underline rounded-md  hover:bg-primary hover:text-lighterGreen focus:text-lighterGreen focus:bg-primary focus:outline-none transition-all duration-200 ease-in-out"
              >
                {"How To Support"}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
