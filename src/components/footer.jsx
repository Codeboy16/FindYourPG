"use client";
import React from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-100 via-purple-50 to-pink-100 text-gray-700 pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo & About Section */}
        <div className="space-y-4">
          <div>
            <Image
              src="/logo.png"
              alt="Hire & Hired Logo"
              width={100}
              height={100}
              className="rounded-md"
            />
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              FindYourPG
            </h2>
          </div>

          <p className="text-sm text-gray-600">
            Discover verified PG accommodations near your college. Affordable,
            trustworthy, and broker-free.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/findpg"
                className="hover:text-blue-600 transition duration-300"
              >
                Find PG
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-gray-700">
              <FiMapPin className="text-blue-600" /> Gangtok, Sikkim, India
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FiPhone className="text-blue-600" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FiMail className="text-blue-600" /> support@findyourpg.in
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
          <div className="flex gap-5 text-xl text-gray-700">
            <Link
              href="#"
              className="hover:text-blue-600 transition duration-300"
            >
              <FiInstagram />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-600 transition duration-300"
            >
              <FiFacebook />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-600 transition duration-300"
            >
              <FiTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} FindYourPG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
