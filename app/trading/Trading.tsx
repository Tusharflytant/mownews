'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import CreationDate from '@/components/Date';
import usNews from '@/constants/usnews';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';




const Trading = () => {
  const [visiblePosts, setVisiblePosts] = useState(12); 
  const loadMore = () => {
    setVisiblePosts((prev) => prev + 12); 
  };

  return (
    <>
      <div className='bg-white max-w-7xl mx-auto'>

        <div className='mt-40 pt-8 text-black text-center  flex flex-col justify-center'>

        <div className="max-w-7xl text-black px-6  ">
       <Breadcrumb />
        </div>
          

          <div className=" text-left lg:p-4">
     
       <div className="flex justify-between mb-4 items-center sm:px-2 mt-4 lg:px-0 px-6 ">
       <Link href="/trading"  >
         <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-purple-700 cursor-pointer
          text-black font-bold">
           HEALTH INSURANCE
         </span>
       </Link>
       
</div>

<div className='bg-white mt-8 sm:px-4 lg:px-0 px-4'>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 w-full gap-4">
    {usNews.slice(20, 22).map((post, index) => (
      <Link 
        key={index} 
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} 
        passHref
      >
        <div className="relative w-full h-[360px] overflow-hidden  group cursor-pointer">
  <Image
    src={`/articles/${post.imgUrl}`}
    alt={post.title}
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-300 group-hover:scale-105"
  />
  
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Title Overlay */}
  <div className="absolute bottom-0 left-0 w-full px-4 py-3 z-10">
    <h2 className="text-white text-xl font-semibold drop-shadow-md">
      {post.title}
    </h2>
  </div>
</div>

      </Link>
    ))}
  </div>
</div>


            <div className="grid mt-16 grid-cols-1   md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center w-full  mx-auto">
              {usNews.slice(0, visiblePosts).map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                  className='bg-white p-4 lg:p-0'
                >
                  <Image
                    src={`/articles/${post.imgUrl}`}
                    width={1000}
                    height={1000}
                    alt={post.title}
                    className='h-[250px] xl:h-[200px] object-cover transition-transform duration-300 ease-in-out
                    hover:scale-105 hover:brightness-110'
                  />
                  <h2 className='mt-3 text-xl text-left font-bold text-black'>{post.title}</h2>
                  <p className="text-gray-500 text-left text-sm p-2">
                    <CreationDate articleNumber={post.articleNumber} />
                  </p>
                </Link>
              ))}
            </div>

            {visiblePosts < usNews.length && (
              <div className='flex justify-center mt-10'>
                <button
                  onClick={loadMore}
                  className='bg-purple-500 cursor-pointer hover:bg-purple-600 text-white px-10 py-4 rounded-md transition duration-300'
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='h-20 bg-white'></div>
        
      </div>
    </>
  );
};

export default Trading;
