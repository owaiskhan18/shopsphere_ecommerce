"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assests/images/logo.jpeg";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import { FiMenu, FiX, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Wrapper>
      <header className="flex justify-between items-center bg-white px-4 py-3 relative border-b">

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

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-x-5">

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-black"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>

          {/* Wishlist */}
          <Link href="/wishlist" className="text-black text-xl hover:text-gray-600">
            <FiHeart />
          </Link>

          {/* Cart with Badge */}
          <Link href="/cart" className="relative text-black text-xl hover:text-gray-600">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-x-4 md:hidden">

          {/* Mobile Cart with SAME Badge */}
          <Link href="/cart" className="relative text-black text-xl">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black text-2xl"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col gap-y-3 p-4 md:hidden shadow-lg">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-black text-lg font-medium hover:text-gray-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}

            {/* Mobile Search */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded-full pl-10 pr-4 py-2 text-sm w-full focus:outline-none"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>

            {/* Mobile Wishlist */}
            <Link href="/wishlist" className="text-black text-lg flex items-center gap-2">
              <FiHeart /> Wishlist
            </Link>
          </ul>
        )}
      </header>
    </Wrapper>
  );
};

export default Header;