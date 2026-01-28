"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assests/images/logo.jpeg";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Signup", href: "/signup" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <Wrapper>
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/">
            <Image
              src={Logo}
              alt="ShopSphere Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-x-6 text-black font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="hover:text-gray-600 transition">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-x-5 relative">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 lg:w-72 border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="text-xl">
              <FiHeart />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative text-xl">
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>

            {/* User Icon */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="text-xl cursor-pointer"
              >
                <FiUser className="bg-[#DB4444] text-white text-2xl rounded-full p-1" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm w-full hover:bg-gray-100">
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-x-4 md:hidden relative">
            {/* User */}
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="text-xl cursor-pointer"
            >
              <FiUser className="bg-[#DB4444] text-2xl text-white rounded-full p-1" />
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative text-xl">
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile User Dropdown */}
            {userMenuOpen && (
              <div className="absolute top-12 right-0 w-32 bg-white border rounded shadow-md">
                <button className="flex items-center gap-2 px-4 py-2 text-sm w-full hover:bg-gray-100">
                  <FiLogOut /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col gap-y-3 p-4 md:hidden shadow-lg">
            {navLinks.map((link) => (
              <li
                key={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-36 sm:w-48 border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>

            <Link href="/wishlist" className="flex items-center gap-2">
              <FiHeart /> Wishlist
            </Link>
          </ul>
        )}
      </Wrapper>
    </header>
  );
};

export default Header;
