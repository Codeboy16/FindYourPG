"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    // Listen to scroll event
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${scrollY&&('bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 shadow-md')}  fixed w-full z-50 mb-5`}>
      <div className="max-w-7xl mx-auto py-2 md:py-4 flex items-center justify-between px-6 md:px-0">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Hire & Hired Logo"
            width={100}
            height={100}
            className="rounded-md"
          />
          
          <span className="hidden lg:block text-xl font-extrabold  tracking-wide my-auto py-auto bg-gradient-to-r from-gray-900 to-blue-600 text-transparent bg-clip-text">
            FindYourPG
          </span>
        </Link>

        {/* Desktop Links (Right-Aligned) */}
        <nav className="hidden text-lg md:flex space-x-4 items-center ml-auto">
          <Link
            href="/"
            className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/findpg"
            className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
          >
            Find PG
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
          >
            List Your PG
          </Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        {
          
        <div className="hidden md:flex space-x-3 items-center ml-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white rounded-md px-5 py-2 flex items-center justify-center space-x-1 font-semibold hover:bg-blue-700 transition duration-300 transform "
          >
            <FiUser className="text-lg" />
            <span className="hidden sm:block">Login</span>
          </Link>

          <Link
            href="/signup"
            className="bg-green-600 text-white rounded-md px-5 py-2 flex items-center justify-center space-x-1 font-bold hover:bg-green-700 transition duration-300 transform "
          >
            <LuUserPlus className="text-lg" />
            <span className="hidden sm:block">Sign Up</span>
          </Link>
        </div>
       
        }

        
        
        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden  text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX className="text-3xl"/> : <HiMenu className="text-4xl"/>}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col space-y-6 px-6 py-4">
            <Link
              href="/"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/findpg"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200"
              onClick={toggleMenu}
            >
              Find PG
            </Link>
            <Link
              href="/listyourpg"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-200 mr-3"
              onClick={toggleMenu}
            >
              List Your PG
            </Link>
            <hr className="border-gray-200" />
            {/* <Link
              href="/login"
              className="bg-blue-600 text-white font-semibold hover:text-blue-600 transition duration-200 text-center px-6 py-3 rounded-md "
              onClick={toggleMenu}
            >
              Login
            </Link> */}
            <Link
              href="/signup"
              className="bg-green-600 text-white text-center px-6 py-2 rounded-md font-bold hover:bg-blue-700 transition duration-200"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
