"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  useEffect(() => {
    document.title = "Login - FindYourPG";
  }, []);
  //Author Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast.success("Data Send");
    console.log(data);
  };
  // console.log("Login Form ",errors);
  // Show toast for errors only on submit
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      if (errors.email) {
        if(errors.email.message=="Enter Vaild Email Id"){
          toast.error(errors.email.message); 
        }else{
        toast.error("Enter You Email");
        }

      } else if (errors.password) {
        toast.error("Enter Your Password");
      }
    }
  }, [onSubmit]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="Hire & Hired Logo"
            width={100}
            height={100}
            className="rounded-md "
          />
          <h1 className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-blue-600 text-transparent bg-clip-text">
            FindYourPG
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Email id"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: true,
                  pattern: { value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/i,
                             message: "Enter Vaild Email Id",
                            }
                  // /^\S+@\S+$/i
                })}
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
                placeholder="••••••••"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: true, min: 8, max: 16,pattern: /^[^<>&@]+$/i })}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 to-blue-600 text-white font-semibold py-2 rounded-lg hover:from-gray-700 hover:to-blue-700 transition duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} />
          <span className="text-gray-700">Continue with Google</span>
        </button>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}
