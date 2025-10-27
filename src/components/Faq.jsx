"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Why is FindYourPG the best way to find PGs in Gangtok?",
    answer:
      "FindYourPG offers verified PG listings in Gangtok with detailed rent info, room sizes, and contract terms. It’s the easiest way to find trustworthy PGs near your college.",
  },
  {
    question: "What makes FindYourPG different from other PG websites?",
    answer:
      "Unlike other platforms, FindYourPG provides complete details on PGs, including rent, amenities, and contract terms, ensuring transparency and trustworthiness.",
  },
  {
    question: "How do I know the PG listings on FindYourPG are authentic?",
    answer:
      "Every PG on FindYourPG is manually verified for accuracy, ensuring the information is real, including room rent, contract terms, and photos.",
  },
  {
    question: "Is it free to list my PG on FindYourPG?",
    answer:
      "Yes, listing your PG on FindYourPG is completely free. You can manage your listing easily and reach students searching for PGs near their college.",
  },
  {
    question: "Can I view contract details for PGs on FindYourPG?",
    answer:
      "Yes, each PG listing on FindYourPG includes contract details, rent breakdowns, and terms & conditions so you can make an informed decision.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full  py-16 px-4 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
              layout
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none rounded-t-xl transition-all"
              >
                <span>{faq.question}</span>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-600"
                >
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-gray-200"
                  >
                    <div className="px-6 py-4 text-md font-medium text-gray-500 bg-white ">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
