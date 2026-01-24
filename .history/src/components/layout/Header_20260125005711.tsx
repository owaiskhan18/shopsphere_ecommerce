"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../assests/images/logo.jpeg'
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <Wrapper>
      <header className="flex justify-between items-center bg-red-700 px-4 py-3 relative">
        {/* Logo */}
        <div>
          <Link href={'/'}>
            <Image
              src={Logo}
              alt="ShopSphere Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-x-6 text-[#4f46e5] font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:text-indigo-400 transition">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-red-700 flex flex-col gap-y-2 p-4 md:hidden">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-white text-lg font-medium hover:text-indigo-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </Wrapper>
  )
}

export default Header