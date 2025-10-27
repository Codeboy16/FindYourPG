'use client';
import React from 'react';
import { FiMapPin, FiWifi } from 'react-icons/fi';
import { MdOutlineHotel, MdOutlineAttachMoney } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FaTshirt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
const FindPGPage = () => {
  return (
    <><Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 px-4 overflow-scroll">
      
      <div className="max-w-7xl max-h-[700px] mx-auto flex flex-col md:flex-row gap-8 pt-12 ">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-xl space-y-6">
          <h2 className="text-2xl font-bold text-blue-900">Filters</h2>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Price Range (₹)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-400 text-black"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-400 text-black"
              />
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Location</h3>
            <div className="space-y-2">
              {['Near College', 'City Center', 'Bus Stop', 'Metro Station'].map((loc) => (
                <div key={loc} className="flex items-center gap-2">
                  <input type="checkbox" id={loc} className="accent-blue-600" />
                  <label htmlFor={loc} className="text-sm text-gray-700">
                    {loc}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h3>
            <div className="space-y-2 scroll-auto">
              {[
                { name: 'WiFi', icon: <FiWifi /> },
                { name: 'Meals', icon: <IoFastFoodOutline /> },
                { name: 'Laundry', icon: <FaTshirt /> },
                { name: 'Furnished', icon: <MdOutlineHotel /> },
                { name: 'WiFi.', icon: <FiWifi /> },
                { name: 'Meals.', icon: <IoFastFoodOutline /> },
                { name: 'Laundry.', icon: <FaTshirt /> },
                { name: 'Furnished.', icon: <MdOutlineHotel /> },
              ].map((amenity) => (
                <div key={amenity.name} className="flex items-center gap-2">
                  <input type="checkbox" id={amenity.name} className="accent-blue-600" />
                  <label htmlFor={amenity.name} className="text-sm text-gray-700 flex items-center gap-1">
                    {amenity.icon}
                    {amenity.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Apply Button */}
          <div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* PG Listing Section */}
        <section className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Available PGs</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={`Pg.avif`}
                    alt="PG"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-gray-800">
                    Modern PG near College
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <FiMapPin /> Gangtok, Sikkim
                  </p>
                  <p className="text-sm text-gray-700 flex items-center gap-1 font-medium">
                    <MdOutlineAttachMoney className="text-green-600" />
                    ₹6,000/month
                  </p>

                  <div className="flex gap-2 mt-2 text-sm text-gray-600 flex-wrap">
                    <span className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md flex items-center gap-1">
                      <FiWifi /> WiFi
                    </span>
                    <span className="bg-pink-50 border border-pink-200 px-2 py-1 rounded-md flex items-center gap-1">
                      <IoFastFoodOutline /> Meals
                    </span>
                    <span className="bg-green-50 border border-green-200 px-2 py-1 rounded-md flex items-center gap-1">
                      <MdOutlineHotel /> Furnished
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default FindPGPage;
// Prop validation
// PGListing.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
//   gender: PropTypes.string.isRequired,
//   gpsLocation: PropTypes.string, // Optional if you want to include GPS link
//   contactLink: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };