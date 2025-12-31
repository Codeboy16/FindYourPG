"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import PGListing from "../PgListing";
import axios from "axios";
import LoadingSkeleton from "../LoadingSkeleton";

const PGsNearColleges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bestPgData, setBestPgData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state to manage loading

  useEffect(() => {
    const fetchPGData = async () => {
      try {
        const response = await axios.get(
          `https://findyourpg.onrender.com/findPg/topBestPg`
        );
        setBestPgData(response.data); // Set data if successful
        setIsLoading(false); // Set loading to false after data is fetched
        console.log(response.data); // Optional log
      } catch (error) {
        console.log("Error:", error.message); // Log the actual error message
        setIsLoading(false); // Set loading to false if there's an error
      }
    };

    fetchPGData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < bestPgData.length ? prevIndex + 3 : 0
    ); // Ensure index doesn't exceed length
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        prevIndex - 3 >= 0 ? prevIndex - 3 : bestPgData.length - 3 // Handle previous slide
    );
  };

  return (
    <section className="py-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Top 5 Popular PGs Near Gangtok
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Discover the best PGs around your preferred areas!
        </p>
        <div className="relative">
          {/* Carousel Container */}
          <motion.div
            key={currentIndex}
            className="flex space-x-6 justify-center overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 100 + "%" }}
            transition={{ duration: 0.5 }}
          >
            {/* Loading Skeletons (only show when loading) */}
            {isLoading ? (
              Array.from({ length: 3 }).map((_, idx) => (
                <LoadingSkeleton key={idx} />
              ))
            ) : (
              // Render actual PG data when it's fetched
              bestPgData.slice(currentIndex, currentIndex + 3).map((pg, idx) => (
                <PGListing
                  key={idx}
                  name={pg.pgName}
                  location={pg.address}
                  price={pg.price}
                  rating={pg.rating}
                  gender={pg.pgType}
                  gpsLocation={pg.map}
                  contactLink={pg.contactLink}
                  image={`https://findyourpg.onrender.com/${pg.image}`}
                />
              ))
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-blue-600"
          >
            <IoIosArrowForward />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-blue-600"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <Link href="/findpg">
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
            Explore All PGs
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PGsNearColleges;
