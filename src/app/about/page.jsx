import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { IoHomeOutline, IoLocationOutline, IoFlashOutline } from "react-icons/io5";

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Section 1: Intro */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
            About FindYourPG
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Finding a PG shouldn’t feel like a full-time job. <span className="font-semibold">FindYourPG</span> simplifies your room-hunting experience by connecting students and professionals with verified accommodations — fast, fair, and broker-free.
          </p>
        </section>

        {/* Section 2: Our Mission */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
            <p className="text-gray-700 text-md leading-relaxed">
              In a world full of fake listings and unreliable brokers, we aim to bring transparency and trust to PG hunting. Whether you're a student moving to a new city or a working professional, we help you find a place that feels like home.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                100% Verified Listings
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                No Broker Involvement
              </li>
              <li className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                Affordable & Nearby Options
              </li>
            </ul>
          </div>
          <img
            src="heroBg.png"
            alt="Mission Illustration"
            className="rounded-2xl shadow-xl w-full md:w-1/2"
          />
        </section>

        {/* Section 3: How It Works */}
        <section className="space-y-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <IoLocationOutline className="text-3xl text-blue-600" />,
                title: "Search by Location",
                desc: "Enter your college or workplace location to get nearby PGs instantly."
              },
              {
                icon: <IoHomeOutline className="text-3xl text-purple-600" />,
                title: "Compare & Choose",
                desc: "Browse detailed listings with photos, amenities, and reviews."
              },
              {
                icon: <IoFlashOutline className="text-3xl text-pink-600" />,
                title: "Book Instantly",
                desc: "Contact the owner or book directly — zero broker fees, zero hassle."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all space-y-3"
              >
                <div>{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">Why Choose Us?</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            We’re not just another PG listing site. We're a student-first platform, built to save your time, money, and sanity.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-left">
            {[
              "Real-time verified listings",
              "Zero brokerage fees",
              "Student-friendly pricing",
              "Secure landlord contact",
              "Easy booking experience",
              "Support available 24/7"
            ].map((point, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border hover:shadow-md transition flex items-start gap-3"
              >
                <FiCheckCircle className="text-green-500 mt-1" />
                <p className="text-sm text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: CTA */}
        <section className="text-center py-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Ready to Find Your Next PG?
          </h3>
          <a
            href="/findpg"
            className="inline-block mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Listings
          </a>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
