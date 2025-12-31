"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PGListing from "@/components/PgListing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { FiSearch } from "react-icons/fi";

const SearchPg = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // For URL updates
  const location = searchParams.get("location");
  const budget = searchParams.get("budget");

  const [pgData, setPgData] = useState([]);
  const [userLocation, setUserLocation] = useState(location || gangtok);
  const [userBudget, setUserBudget] = useState(budget || 2000);

  // Fetching PG data when location or budget changes
    useEffect(() => {
  const fetchPGData = async () => {
    try {
      const response = await fetch(
        `https://findyourpg.onrender.com/findPg/search?location=${userLocation}&budget=${userBudget}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setPgData(data);
    } catch (error) {
      console.log("Error fetching PG data", error);
    }
  };

    fetchPGData();
  }, [userLocation, userBudget]);

  // Handle form submission to trigger search
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Optionally, update URL to reflect search parameters
    router.push(`/findpg/search?location=${userLocation}&budget=${userBudget}`);
    fetchPGData(); // Fetch data after URL change
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 px-4 ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          PG Search Results
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearchSubmit} className="pb-10 pt-5">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 md:items-center justify-center">
            {/* Location Input */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Enter College/City"
                className="w-full md:w-96 px-4 py-3 rounded-lg text-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 text-black"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
              />
            </div>

            {/* Budget Input */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="number"
                placeholder="Max Budget (₹)"
                className="w-full md:w-64 px-4 py-3 rounded-lg text-lg border-2 border-gray-300   focus:outline-none  focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-500"
                value={userBudget}
                onChange={(e) => setUserBudget(e.target.value)}
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

        {/* Display Search Results */}
        {pgData.length > 0 ? (
          <div className="flex justify-center flex-wrap gap-4">
            {pgData.map((pg, index) => (
              <PGListing
                key={index}
                name={pg.pgName}
                location={pg.address}
                price={pg.price}
                rating={pg.rating}
                gender={pg.pgType}
                gpsLocation={pg.map}
                contactLink={pg.contactLink}
                image={`https://findyourpg.onrender.com/${pg.image}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-4">No results found</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchPg;
