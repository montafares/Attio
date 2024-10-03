"use client";
import React, { useState } from "react";
import Icon from "../icon";
import Link from "next/link";

type Link = {
  links: { name: string; route: string; badgeCount?: number }[];
  className?: string;
  closeMobileMenu?: () => void;
};
export function NavLinks({ links, className, closeMobileMenu }: Link) {
  return (
    <div className={`flex items-center ${className} `}>
      {links.map((link) => (
        <div key={link.name} className="flex items-center space-x-2">
          <Link
            href={link.route}
            className="text-baseColor-600 hover:text-baseColor-900 font-inter font-medium "
            onClick={closeMobileMenu}
          >
            {link.name}
          </Link>
          {link.badgeCount ? (
            <div className="text-baseColor-100 flex justify-center items-center h-5 w-5 bg-baseColor-600 rounded-full">
              {link.badgeCount}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const links = [
    {
      name: "Customer",
      route: "/",
      badgeCount: 0,
    },
    {
      name: "Changelog",
      route: "/",
      badgeCount: 0,
    },
    {
      name: "Help",
      route: "/",
      badgeCount: 0,
    },
    {
      name: "Careers",
      route: "/",
      badgeCount: 4,
    },
    {
      name: "Pricing",
      route: "/",
      badgeCount: 0,
    },
  ];

  return (
    <nav className="bg-white  pt-5 ">
      <div className="flex items-center gap-8  ">
        <div className="flex-shrink-0">
          <Icon name="logoattio" />
        </div>

        <div className="hidden md:flex flex-grow">
          <NavLinks links={links} className="space-x-3  gap-3 lg:gap-5" />
        </div>

        <div className="hidden md:flex items-center gap-4 select-none lg:ml-auto md:h-10">
          <button className="px-4 py-2 border-2 border-baseColor-200 bg-primary rounded-xl hover:bg-darkColor-300">
            Sign In
          </button>
          <button className="px-4 py-2 bg-darkColor-600 text-white rounded-xl border-2 border-darkColor-400 hover:bg-darkColor-500">
            Start for free
          </button>
        </div>

        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Icon name={`${isMobileMenuOpen ? "close" : "menu"}`} fill="#000" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden items-start bg-white mt-4 space-y-1 fixed   w-11/12 h-full">
          <NavLinks
            closeMobileMenu={closeMobileMenu}
            links={links}
            className="flex-col gap-5 space-y-2 items-stretch mb-5"
          />

          <div className="flex flex-col gap-5    lg:ml-auto">
            <button className="px-4 py-2 border-2 border-baseColor-200 bg-primary rounded-xl hover:bg-darkColor-300">
              Sign In
            </button>
            <button className="px-4 py-2 bg-darkColor-600 text-white rounded-xl border-2 border-darkColor-400 hover:bg-darkColor-500">
              Start for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
