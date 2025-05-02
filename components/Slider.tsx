'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import allArticles from '@/constants/all';
import CreationDate from './Date'; // Ensure this component exists and is imported



const Slider = () => {
  return (
    <div className="mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        className="relative mySwiper h-auto"
      >
        {allArticles.map((post, index) => {
          const link = `/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`;
          const imagePath = `/articles/${post.imgUrl}`;
          const authorImage = `/authors/${post.authorName}.jpg`;
          const authorLink = `/authors/${post.authorName.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase()}`;

          return (
            <SwiperSlide key={index}>
              <section className="text-white body-font mt-20 px-20 overflow-hidden  ">
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  
                  <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[400px]">
                    <Image
                      alt="blog image"
                      className="w-full h-full object-cover"
                      src={imagePath}
                      layout="fill" // Makes the image cover the container
                      objectFit="cover" // Ensures the image covers the entire area without distorting
                    />
                  </div>

                  <div className="lg:w-1/2 w-full ml-1.5">
                    <h2 className="text-sm font-semibold  uppercase tracking-wide">
                      {post.category}
                    </h2>

                    <h1 className="text-2xl md:text-4xl lg:text-3xl mt-4 font-bold tracking-wide mb-4 hover:underline hover:decoration-4 underline-offset-4">
                      {post.title}
                    </h1>

                    <div className="mt-6 flex items-center">
                      <Image
                        src={authorImage}
                        alt={post.authorName}
                        width={100}
                        height={100}
                        className="rounded-full object-cover size-8"
                      />
                      <div className="flex">
                        <Link href={authorLink}>
                          <p className="text-purple-600 hover:text-white font-medium mt-1 ml-4 text-sm md:text-sm">
                            By {post.authorName}
                          </p>
                        </Link>
                        <p className="text-gray-500 ml-4 mt-1 text-sm md:text-sm">
                          <CreationDate articleNumber={post.articleNumber} />
                        </p>
                      </div>
                    </div>

                    <h5 className="text-md text-black line-clamp-2 mt-4">
                      {post.contents[0]}
                    </h5>

                    <Link href={link}>
                      <button
                        className="mt-6 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 
                                   bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 
                                   hover:from-purple-600 hover:via-purple-600 hover:to-purple-700 
                                   shadow-md hover:cursor-pointer hover:shadow-lg"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
