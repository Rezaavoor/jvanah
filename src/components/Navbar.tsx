"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Transition } from "@headlessui/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/whatwedo", label: "Mission" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
    { href: "/become-a-member", label: "Courses", isButton: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-soft-md border-b border-sage-100/50"
          : "bg-transparent"
      }`}
    >
      <Disclosure>
        {({ open, close }) => (
          <>
            <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 md:h-18">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 group relative z-10"
              >
                <span className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/img/jvanah/logo.svg"
                    alt="Jvanah"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </span>
                <span className="text-lg font-semibold tracking-tight text-navy-900">
                  Jvanah
                </span>
              </Link>

              {/* Desktop links */}
              <ul className="hidden lg:flex items-center gap-1">
                {menuItems.map((item) =>
                  item.isButton ? (
                    <li key={item.href} className="ml-3">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          pathname === item.href
                            ? "bg-sage-500 text-white shadow-green-glow"
                            : "bg-sage-500/10 text-sage-700 hover:bg-sage-500 hover:text-white hover:shadow-green-glow"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          pathname === item.href
                            ? "text-sage-600 bg-sage-50"
                            : "text-navy-600 hover:text-sage-600 hover:bg-sage-50/50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              {/* Mobile toggle */}
              <Disclosure.Button className="lg:hidden relative z-10 p-2 -mr-2 rounded-lg text-navy-600 hover:bg-sage-50 transition-colors">
                <span className="sr-only">Toggle menu</span>
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
                  <span
                    className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${
                      open ? "rotate-45 translate-y-[3.25px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                      open ? "opacity-0 scale-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${
                      open ? "-rotate-45 -translate-y-[3.25px]" : ""
                    }`}
                  />
                </div>
              </Disclosure.Button>
            </nav>

            {/* Mobile panel */}
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-2"
            >
              <Disclosure.Panel className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-sage-100/50 shadow-soft-lg">
                <div className="max-w-6xl mx-auto px-5 py-4 space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => close()}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-sage-50 text-sage-600"
                          : "text-navy-600 hover:bg-sage-50/50 hover:text-sage-600"
                      } ${
                        item.isButton
                          ? "mt-2 text-center bg-sage-500/10 text-sage-700 hover:bg-sage-500 hover:text-white"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
};
