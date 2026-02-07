"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/whatwedo", label: "Mission" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
    { href: "/become-a-member", label: "Courses", isButton: true },
  ];

  return (
    <div
      className={`w-screen fixed transition-all duration-500 ease-in-out bg-transparent ${
        isScrolled
          ? "border-b-[2px] border-primaryBlue shadow-lg shadow-black/5"
          : "border-none"
      } z-50 backdrop-blur-md bg-opacity-30 rounded-lg`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-end space-x-2 text-2xl font-medium text-primary transition-all duration-500 ease-in-out hover:scale-125 relative w-14 h-14">
            <Image
              src="/img/jvanah/logo.svg"
              alt="Logo"
              width={100} // Adjusted logo size
              height={100}
              className="object-contain"
            />
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <Disclosure>
          {({ open, close }) => (
            <>
              <Disclosure.Button className="lg:hidden px-4 py-2 text-primary focus:outline-none">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-col w-full mt-2 bg-transparent shadow-lg rounded-lg lg:hidden">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => close()} // Close the menu after a menu item is clicked
                    className={`w-full px-4 py-2 text-primary hover:bg-gray-100 focus:bg-gray-100 text-center ${
                      pathname === item.href ? "font-bold" : ""
                    } ${item.isButton ? "underline" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {menuItems.map((item) => (
              <li key={item.href} className="mr-3">
                <Link
                  href={item.href}
                  className={`inline-block px-2 py-1 text-base font-normal text-primary no-underline rounded-md hover:bg-primary hover:text-lighterGreen transition-all duration-200 ease-in-out ${
                    pathname === item.href ? "font-bold text-primaryGreen" : ""
                  } ${item.isButton ? "font-semibold underline" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
