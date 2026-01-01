"use client";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect,Suspense } from 'react';
import Link from "next/link";
export default function SearchExplore() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = ({ location, budget }) => {
    //  <Link href={`/findpg/search?location=${location}&budget=${budget}`}/>;
       window.location.href = `/findpg/search?location=${location}&budget=${budget}`
  };

  // Show toast for errors only on submit
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      if (errors.location) {
        toast.error("Enter The Location");
      }else if(errors.budget) {
        // toast.error(errors.budget.type === 'min' ? "Budget should be at least ₹1000" : "Budget should not exceed ₹30000");
        toast.error(errors.budget.ref.value < 1000 ? "Budget should be at least ₹1000" : "Budget should not exceed ₹30000");

      }
    }
  }, [onSubmit]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <section className="py-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore PGs Near You
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Find the perfect PG for your needs. Select your preferences below!
        </p>

        {/* Search Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 md:items-center justify-center">
            {/* Location Input */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Enter College/City"
                className="w-full md:w-96 px-4 py-3 rounded-lg text-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("location", { required: true })}
              />
            </div>

            {/* Budget Input */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="number"
                placeholder="Max Budget (₹)"
                className="w-full md:w-64 px-4 py-3 rounded-lg text-lg border-2 border-gray-300   focus:outline-none  focus:ring-2 focus:ring-blue-500"
                {...register("budget", { required: true, valueAsNumber: true, min: 1000, max: 30000 })}
              />
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="bg-green-600 text-white px-12 py-3 rounded-lg text-lg font-semibold flex justify-center items-center hover:bg-green-700 transition duration-300 transform shadow-xl mt-4 md:mt-0 cursor-pointer"
              >
                <FiSearch className="mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      </div>
    </section>
    </Suspense>
  );
}
