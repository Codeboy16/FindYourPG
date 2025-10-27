import Faq from "@/components/Faq";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/footer";
import ListYourPGSection from "@/components/Home/ListYourPGSection";
import PGsNearColleges from "@/components/Home/PGsNearColleges";
import SearchExplore from "@/components/Home/Search";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 text-gray-800 relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-[80px] left-[-100px] z-0"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 top-[400px] right-[-100px] z-0"></div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 mt-20 md:mt-32 flex flex-col-reverse md:flex-row items-center justify-around  py-16 max-w-7xl mx-auto w-full">
        {/* Text Section */}
        <section className="md:w-1/2 text-center md:text-left space-y-8 md:mr-5">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent px-3 md:px-0">
            Busy with College Life? <br className="hidden md:block" />
            <span className="text-blue-700">Find a PG Nearby in Minutes.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed text-balance space-x-1 px-3 md:px-0">
            Tired of asking everyone for rooms or scrolling random groups?{" "}
            <span className="font-semibold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              FindYourPG
            </span>{" "}
            helps you explore verified PGs near your college. Compare, decide,
            and move in — no stress, no brokers.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 md:pt-4">
            <Link
              href="/findpg"
              className="
              bg-green-600 text-white px-12 md:px-4 py-3 rounded-lg text-lg font-semibold flex justify-center justify-items-center items-center space-x-2 hover:bg-green-700 transition duration-300 transform shadow-xl"
            >
              <span>Find PGs Now</span>
              <IoIosArrowForward className="ml-1 text-xl" />
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="bg-blue-600 text-white px-16 md:px-9 py-2 md:py-3 rounded-lg text-lg font-semibold flex justify-around space-x-2 hover:bg-blue-700 transition duration-300 transform  shadow-xl"
            >
              <FiUser className="mr-2 text-2xl" />
              <span>Login</span>
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <section className="md:w-1/2 mb-12 md:mb-0 flex justify-center relative z-10">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <Image
              src="/Bg.png"
              alt="Students searching for PG accommodation"
              layout="fill"
              objectFit="cover"
              className="z-1 p-5 md:p-0"
              priority
            />

             
            <Image
              src="/floor.png"
              alt="floor design"
              layout="fill"
              className="absolute top-[90%] opacity-60 z-0 animate-pulse"
              priority
            />
            {/* Floating elements */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-blue-400 rounded-full opacity-30 animate-pulse "></div>
            <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-green-400 rounded-full opacity-30 md:animate-bounce"></div>
          </div>
        </section>
      </main>
      <SearchExplore/>
      <PGsNearColleges/>
      <FeatureSection/>
      <ListYourPGSection/>
      <Faq/>
      <Footer/>
    </div>
  );
}
