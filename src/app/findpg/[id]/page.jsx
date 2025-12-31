"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import axios from "axios";

const PGDetails = () => {
  const [pgData, setpgData] = useState(null);
  const params = useParams();
  const { id } = params; // Get the id from the URL params

  useEffect(() => {
    // Fetch data only once when the component mounts
    function getData() {
      axios
        .get("https://findyourpg.onrender.com/findpg")
        .then((response) => {
          console.log(response.data);
          setpgData(response.data);
        })
        .catch((error) => {
          console.log("Pg Data Not Fetched ", error);
        });
    }

    getData();
  }, []);

  const pgDetail = pgData ? pgData.find((pg) => pg.id.toString() === id) : null;

  return (
    <>
      <Navbar />
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {pgDetail ? (
            <div className="flex flex-col md:flex-row gap-8 my-20">
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src={`https://findyourpg.onrender.com/${pgDetail.image}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                  alt={pgDetail.pgName}
                />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-900">{pgDetail.pgName}</h1>
                <p className="text-lg text-gray-700 mt-4">{pgDetail.address}</p>
                <div className="flex items-center mt-4">
                  <p className="text-xl font-semibold text-blue-600">
                    ₹{pgDetail.price} / month
                  </p>
                  <span className="ml-4 text-sm text-gray-500">
                    Rating: {pgDetail.rating}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Amenities</h3>
                  <ul className="list-disc pl-6 mt-4 text-gray-700">
                    {/* Render amenities here */}
                    {pgDetail.amenities && pgDetail.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Contact</h3>
                  <a
                    href={pgDetail.contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading PG details...</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PGDetails;
