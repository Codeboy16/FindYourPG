import React from 'react';
import { FiWifi } from 'react-icons/fi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FaTshirt } from 'react-icons/fa';
import { MdOutlineHotel } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-[35rem] h-1/2 bg-white p-6 rounded-2xl shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Filters</h2>

      {/* Price Range */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Price Range (₹)</label>
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
      <LocationFilter />

      {/* Amenities */}
      <AmenitiesFilter />

      {/* Apply Button */}
      <div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

const LocationFilter = () => (
  <div>
    <h3 className="text-sm font-semibold text-gray-700 mb-2">Location</h3>
    <div className="space-y-2">
      {['Near College', 'City Center', 'Bus Stop', 'Metro Station'].map((loc) => (
        <div key={loc} className="flex items-center gap-2">
          <input type="checkbox" id={loc} className="accent-blue-600" />
          <label htmlFor={loc} className="text-sm text-gray-700">{loc}</label>
        </div>
      ))}
    </div>
  </div>
);

const AmenitiesFilter = () => (
  <div>
    <h3 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h3>
    <div className="space-y-2 scroll-auto">
      {[
        { name: 'WiFi', icon: <FiWifi /> },
        { name: 'Meals', icon: <IoFastFoodOutline /> },
        { name: 'Laundry', icon: <FaTshirt /> },
        { name: 'Furnished', icon: <MdOutlineHotel /> },
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
);

export default Sidebar;
