"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

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
    { href: "/whatwedo", label: "What We Do" },
    { href: "/support", label: "How To Support" },
    { href: "/about", label: "About Us" },
    { href: "/become-a-member", label: "Become a Member", isButton: true },
  ];

  return (
    <div
      className={`w-screen fixed transition-all duration-500 ease-in-out bg-lighterGreen ${
        isScrolled ? "border-b-[1px] border-primaryGreen" : "border-none"
      } z-50`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between  mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-end space-x-2 text-2xl font-medium text-primary transition-all duration-500 ease-in-out hover:scale-125 relative w-14 h-14">
            <Image
              src="/img/jvanah/logo.svg"
              fill={true}
              alt="Logo"
              className="w-16"
            />
          </span>
        </Link>

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
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => close()}
                      className={`w-full px-4 py-2 text-primary hover:bg-gray-100 focus:bg-gray-100 ${
                        pathname === item.href ? "font-bold" : ""
                      } ${item.isButton ? "underline" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </DisclosurePanel>
              </Transition>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {menuItems.map((item) => (
              <li key={item.href} className="mr-3 nav__item">
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
