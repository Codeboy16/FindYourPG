"use client";
import React from "react";
import { FaBriefcase, FaUsers, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBriefcase />,
    title: "For Employers",
    description:
      "Find and hire top talent faster with AI shortlisting, automated filtering, and smart recommendations — all designed to save you time and boost hiring precision.",
    color: "#F97316", // orange
  },
  {
    icon: <FaUsers />,
    title: "For Job Seekers",
    description:
      "Get job matches tailored to your skills, see your chances of getting hired, and track your applications in real time — all in one seamless platform.",
    color: "#059669", // green
  },
  {
    icon: <FaRobot />,
    title: "Smart Matching",
    description:
      "Our advanced matching engine analyzes resumes, skills, and job requirements to connect the right candidates with the right opportunities — instantly. No guesswork.",
    color: "#2563EB", // blue
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-6  border-t  border-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          Why Choose <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">FindYourPG</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Whether you're hiring top talent or searching for your next big
          opportunity, <br />
          Hire&Hired is built to deliver faster, smarter, and better results.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
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
                className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center text-white text-3xl  border-3  border-gray-200`}
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
    </section>
  );
};

export default FeatureSection;
