"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PGListing from "@/components/PgListing";
const pgData = [
  {
    name: "Budget PG near Metro Station",
    location: "Gangtok",
    price: 6000,
    rating: 5,
    gender: "Male",
    gpsLocation: "Gangtok",
    contactLink: "tel:+123456789",
    image: "/heroBg.png", // Valid image URL
  },
];
const FindPGPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 px-4 ">
        <div className="max-w-full md:max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-8 pt-12  overflow-scroll">
          {/* Sidebar Filters */}
          <Sidebar />

          {/* PG Listing Section */}
          <div className="overflow-hidden">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4 ">
              Available PGs
            </h2>
            <div className="flex flex-wrap -m-4">
              <PGListing
                name="Budget PG near Metro Station"
                location="Gangtok"
                price={5000}
                rating={5}
                gender={1}
                gpsLocation="Gangtok"
                contactLink={123456789}
                image="/Pg.avif"
              />
              <PGListing
                name="Budget PG near Metro Station"
                location="5th Mile Tadong,Gangtok,Sikkim"
                price={6100}
                rating={4}
                gender={1}
                gpsLocation="Gangtok"
                contactLink={123456789}
                image="/room1.jpeg"
              />
              <PGListing
                name="Budget PG near Metro Station"
                location="lower Sichey, Near Bar pipal,Gangtok,Sikkim"
                price={8000}
                rating={3}
                gender={0}
                gpsLocation="Gangtok"
                contactLink={123456789}
                image="/room2.jpg"
              />
              <PGListing
                name="Budget PG near Metro Station"
                location="Gangtok"
                price={4000}
                rating={1}
                gender={0}
                gpsLocation="Gangtok"
                contactLink={123456789}
                image="/Pg.avif"
              />
            </div>
          </div>
          {/* <PGListing pgData={pgData} /> */}
        </div>
      </div>
    </>
  );
};

export default FindPGPage;
