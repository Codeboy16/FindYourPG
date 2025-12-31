"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PGListing from "@/components/PgListing";
import axios from "axios";
import Footer from "@/components/footer";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Link from "next/link";

const FindPGPage = () => {
  const [pgData, setpgData] = useState("");

  useEffect(() => {

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 px-4">
        <div className="max-w-full md:max-w-[100rem] mx-auto flex flex-col md:flex-row justify-center gap-8 pt-12 overflow-auto">
          {/* Sidebar Filters */}
          <Sidebar />
          
          {/* PG Listing Section */}
          <div className="overflow-hidden w-full">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">Available PGs {pgData.length}</h2>
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 gap-2">
              {pgData ?(
                pgData.map((pg, index) => (
                  <Link href={`/findpg/${pg.id}`} key={index}>
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
                   </Link>
                ))):(
                  Array.from({ length: 6 }).map((_, index) => (
                  <LoadingSkeleton key={index} />
                ))
                )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FindPGPage;
