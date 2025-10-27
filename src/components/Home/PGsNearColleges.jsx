"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import PGListing from "../PgListing";

const PGsNearColleges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pgListings = [
    {
      name: "Budget PG near Metro Station",
      location: "Gangtok",
      price: 6000,
      rating: 5,
      gender: 1,
      gpsLocation: "Gangtok",
      contactLink: 123456789,
      image: "/room1.jpeg"
    },
    {
      name: "Luxury PG in Heart of City",
      location: "Gangtok",
      price: 12000,
      rating: 4.5,
      gender: 0,
      gpsLocation: "Gangtok",
      contactLink: 123456789,
      image: "/room2.jpg"
    },
    {
      name: "Budget PG near Metro Station",
      location: "Gangtok",
      price: 6000,
      rating: 5,
      gender: 1,
      gpsLocation: "Gangtok",
      contactLink: 123456789,
      image: "/room1.jpeg"
    },
    {
      name: "Comfort PG with Kitchen Facilities",
      location: "Gangtok",
      price: 7500,
      rating: 4.8,
      gender: 0,
      gpsLocation: "Gangtok",
      contactLink: 123456789,
      image: "/room2.jpg"
    },
    {
      name: "Cozy PG with Study Areas",
      location: "Gangtok",
      price: 5000,
      rating: 4,
      gender: 1,
      gpsLocation: "Gangtok",
      contactLink: 123456789,
      image: "/room1.jpeg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (pgListings.length - 2)); // Wrap around when there are only 3 listings left
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pgListings.length - 2) % (pgListings.length - 2)
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
            {pgListings.slice(currentIndex, currentIndex + 3).map((pg, idx) => (
              <PGListing
                key={idx}
                name={pg.name}
                location={pg.location}
                price={pg.price}
                rating={pg.rating}
                gender={pg.gender}
                gpsLocation={pg.gpsLocation}
                contactLink={pg.contactLink}
                image={pg.image}
              />
            ))}
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
