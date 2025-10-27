"use client";
import React from "react";
import { FaClipboardList, FaUsers, FaRegChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const listYourPGFeatures = [
  {
    icon: <FaClipboardList />,
    title: "Easy Listing Process",
    description:
      "Easily create and list your PG property with our user-friendly form. Upload photos, set pricing, and specify amenities quickly.",
    color: "purple", // orange
  },
  {
    icon: <FaUsers />,
    title: "Reach Thousands of Students",
    description:
      "Our platform connects you directly to students seeking PG accommodations near their colleges. Increase your visibility effortlessly.",
    color: "#059669", // green
  },
  {
    icon: <FaRegChartBar />,
    title: "Track Your Performance",
    description:
      "Stay informed with detailed insights and analytics on how your PG listing is performing. Track views, inquiries, and bookings.",
    color: "#2563EB", // blue
  },
];

const ListYourPGSection = () => {
  return (
    <section className="py-16 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          List Your PG on{" "}
          <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            FindYourPG
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Reach thousands of students looking for PG accommodations near their college. With FindYourPG, you can easily list and manage your PG properties with zero hassle.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {listYourPGFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative bg-white pt-12 pb-6 px-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Overlapping icon circle */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div
                className={`w-20 h-20 rounded-br-4xl rounded-lg shadow-md flex items-center justify-center text-white text-3xl   `}
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-extrabold text-gray-800 text-center mt-4 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm text-center px-1 leading-relaxed font-medium">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <motion.a
          href="/list-your-pg"
          className="bg-green-600 text-white px-12 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          List Your PG Now
        </motion.a>
      </div>
    </section>
  );
};

export default ListYourPGSection;
