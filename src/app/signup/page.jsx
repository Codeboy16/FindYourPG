"use client";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiMail, FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  useEffect(() => {
    document.title = "Signup - Hire & Hired";
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="FindYourPG Logo"
            width={100}
            height={100}
            className="rounded-md "
          />
          <h1 className="mt-4 text-3xl font-extrabold  bg-gradient-to-r from-gray-900 to-blue-600 text-transparent bg-clip-text">
            FindYourPG
          </h1>
          <p className="text-gray-500 mt-1">Create a new account</p>
        </div>

        {/* Signup Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <FiUser />
              </span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email id"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <FiMail />
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 to-blue-600 text-white font-semibold py-2 rounded-lg hover:from-gray-700 hover:to-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Signup */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            <FcGoogle size={22} />
            <span className="text-gray-700">Sign up with Google</span>
          </button>
        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-500 hover:underline text-md font-semibold"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
