import React from "react";
import { FiMapPin, FiWifi } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
const PGListing = ({
  name,
  location,
  price,
  rating,
  gender,
  gpsLocation,
  contactLink,
  image,
}) => {
  return (
    <section className="w-full md:w-[25rem] p-2">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ">
        <div className="relative h-60 w-full">
          <img
            src={image}
            alt={`Image of ${name} PG, located at ${location}`} // Accessible alt text
            className="object-fit w-full  max-h-60 rounded-tl-xl rounded-tr-xl"
          />
          <div
            className={`absolute top-0 right-0 ${
              gender == 1 ? "bg-blue-600" : "bg-pink-600"
            }  p-2 px-3 rounded-bl-lg text-white font-semibold rounded-tr-lg`}
          >
            {gender == 1 ? "Boys PG" : "Girls PG"}
          </div>
        </div>

        <div className="p-6 pt-3  space-y-3">
          <h3 className="text-xl text-left font-bold text-gray-800 hover:text-blue-600 transition-colors">
            {name.length>30 ? name.substring(0,30)+"...":name}
          </h3>
          <p className="text-md font-bold text-gray-600 flex items-center gap-1 ">
            <FiMapPin className="text-lg text-red-600 " />
            { location.length > 30 ?
            location.substring(0, 30) + "...":location
            }
          </p>
          <span className="flex justify-between">
            <p
              className={`${
                gender == 1 ? "text-blue-600" : "text-pink-600"
              } flex items-center gap-0 font-bold text-lg`}
            >
              <FaIndianRupeeSign />
              {price}/month
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Rating name="simple-controlled" value={rating} />
            </p>
          </span>

          {/* Map And Contact Button */}
          <div className="flex justify-around items-center justify-items-center my-auto flex-wrap">
            {gpsLocation && (
              <div className="flex items-center space-x-2  my-auto ">
                <a
                  href={gpsLocation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex  text-white bg-green-600 hover:bg-green-700 transition-all py-2 rounded-lg font-semibold px-2 md:px-5"
                >
                  <FaMapMarkedAlt className="mr-2 my-auto font-bold " />
                  View on Map
                </a>
              </div>
            )}

            <div className="">
<a
  href={contactLink}
  target="_blank"
  rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-blue-600 text-white hover:bg-blue-700 transition-all py-2 rounded-lg font-semibold px-2 md:px-5"
              >
                <BiPhoneCall className="mr-2 my-auto font-bold" />
                Contact Now
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default PGListing;
