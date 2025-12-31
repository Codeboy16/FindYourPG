import React from 'react'
import Skeleton from '@mui/material/Skeleton';
const LoadingSkeleton = () => {
  return (
    <section className="w-full md:w-[25rem] p-2 ">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ">
        <div className="relative h-60 w-full">
         <Skeleton variant="rectangular" height={240} className="w-[24rem] rounded-tr-xl rounded-tl-xl" />
        </div>
        <div className="space-y-3 overflow-hidden mx-2">
            <Skeleton variant="text" height={40} className="w-[22rem] rounded ml-3 " />
           <Skeleton variant="text" height={40} className="w-[20rem] rounded ml-3" />
            <Skeleton variant="text" height={45} className="w-[20rem] rounded ml-3" />
          {/* Map And Contact Button */}
          <div className="flex justify-around mb-2 mx-2">
               <Skeleton variant="text" height={60} className="w-[10rem] rounded-2xl" />
               <Skeleton variant="text" height={60} className="w-[10rem] rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingSkeleton