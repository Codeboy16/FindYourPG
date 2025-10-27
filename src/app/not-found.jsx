"use client";
import { motion } from 'framer-motion';
import { FaRegFrown } from 'react-icons/fa'; // Frown icon for the error
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      <div className="text-center mx-auto justify-center">
        {/* Icon */}
        <motion.div
          className="text-6xl text-red-500 mb-6 mx-auto text-center"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaRegFrown className='mx-auto'/>
        </motion.div>

        {/* Main Error Message */}
        <motion.h1
          className="text-4xl font-semibold text-gray-900 mb-4"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Oops! Page Not Found
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          We couldn't find the page you're looking for. Please check the URL or go back to the homepage.
        </motion.p>

        {/* Button to go back to the homepage */}
        <Link href="/">
          <motion.div
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-500 transition duration-300"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Go Back to Home
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
