'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CreationDate from '@/components/Date';
import entertainment from '@/constants/entertainment';
import allArticles from '@/constants/all';
import money from '@/constants/money';
import politics from '@/constants/politics';
import Link from 'next/link';
import Post2 from '@/components/Post2';
import Post3 from '@/components/Post3';
import Slider from '@/components/Slider';
import Posts from '@/components/Posts';


function getRandomArticles(articles: TArticle[], count: number) {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


const randomArticles = getRandomArticles(allArticles, 12);
const Page = () => {
  const [randomPost, setRandomPost] = useState(() => getRandomArticles(allArticles, 1)[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandom = getRandomArticles(allArticles, 1)[0];
      setRandomPost(newRandom);
    }, 5000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (

    <>
    <div className="max-w-7xl mx-auto mt-50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
        {/* Column 1 */}
        <div className="space-y-6 col-span-12 md:col-span-3">
          {entertainment.slice(0, 2).map((post, index) => (
            <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`} passHref>
              <div className="bg-white">
                <Post2
                  pimg={`/articles/${post.imgUrl}`}
                  pheading={post.title}
                  pcontent={post.contents}
                  articleNumber={post.articleNumber}
                  section={post.category}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Column 2 - Random image updated every 5s */}
        <div className="space-y-6 col-span-12 md:col-span-6">
          {randomPost && (
            <Link
              href={`/post/${randomPost.title.replace(/[^A-Za-z0-9]+/g, '-')}`}
              passHref
              className="relative h-[650px] block overflow-hidden rounded-md"
            >
              <div className="relative w-full h-full rounded-md">
                <Image
                  src={`/articles/${randomPost.imgUrl}`}
                  width={1200}
                  height={1200}
                  alt={randomPost.title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 rounded-md" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div className="flex text-white">
                    <h5 className="font-bold mt-2 uppercase text-sm text-left">
                      {randomPost.category}
                    </h5>
                    <span className="text-left mt-2 ml-4 text-sm">
                      <CreationDate articleNumber={randomPost.articleNumber} />
                    </span>
                  </div>
                  <h2 className="text-white text-2xl lg:text-4xl font-bold leading-snug">
                    {randomPost.title}
                  </h2>
                </div>
              </div>
            </Link>
          )}

          {/* Fixed post */}
          {money.length > 0 && (
            <Link
              href={`/post/${money[0].title.replace(/[^A-Za-z0-9]+/g, '-')}`}
              passHref
              className="relative h-[400px] block overflow-hidden rounded-md"
            >
              <div className="relative w-full h-full rounded-md">
                <Image
                  src={`/articles/${money[0].imgUrl}`}
                  width={1000}
                  height={1000}
                  alt={money[0].title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 rounded-md" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div className="flex text-white">
                    <h5 className="font-bold mt-2 uppercase text-sm text-left w-[10%]">
                      {money[0].category}
                    </h5>
                    <span className="text-left mt-2 ml-4 text-sm">
                      <CreationDate articleNumber={money[0].articleNumber} />
                    </span>
                  </div>
                  <h2 className="text-white text-2xl lg:text-4xl font-bold leading-snug">
                    {money[0].title}
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Column 3 */}
        <div className="space-y-6 col-span-12  md:col-span-3">
          {politics.slice(0, 2).map((post, index) => (
            <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`} passHref>
              <div className="relative block overflow-hidden">
                <div className="relative mb-6 w-full mx-auto">
                  <Image
                    src={`/articles/${post.imgUrl}`}
                    width={1000}
                    height={1000}
                    alt={post.title}
                    className="w-full h-[312px] object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black/60 rounded-md" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <div className="flex text-white">
                      <h5 className="font-bold mt-2 uppercase text-sm text-left w-[20%]">
                        {post.category}
                      </h5>
                      <span className="text-left mt-2 text-sm">
                        <CreationDate articleNumber={post.articleNumber} />
                      </span>
                    </div>
                    <h3 className="text-white text-xl mt-2 font-semibold">{post.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="grid grid-cols-1 gap-6">
            {politics.slice(2, 5).map((post, index) => (
              <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`} passHref>
                <div className="bg-grey-200 mt-2 w-full">
                  <Post3
                    pimg={`/articles/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
                    section={post.category}
                    articleNumber={post.articleNumber}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>


      <div className='bg-black mt-20 py-30'>

        <div className="overflow-hidden whitespace-nowrap bg-black ">
  <div className="inline-block animate-marquee text-7xl text-white uppercase font-bold">
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
    <span className="mx-10">Featured</span>
  </div>
</div>
      <Slider/>
      </div>

  
      <div className="max-w-7xl mx-auto mt-30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
        {/* Column 1 */}
        <div className="space-y-6 col-span-12 md:col-span-3">
          {politics.slice(2, 4).map((post, index) => (
            <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`} passHref>
              <div className="bg-white">
                <Post2
                  pimg={`/articles/${post.imgUrl}`}
                  pheading={post.title}
                  pcontent={post.contents}
                  articleNumber={post.articleNumber}
                  section={post.category}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Column 2 - Random image updated every 5s */}
        <div className="space-y-6 col-span-12 md:col-span-6">
          {randomPost && (
            <Link
              href={`/post/${randomPost.title.replace(/[^A-Za-z0-9]+/g, '-')}`}
              passHref
              className="relative h-[650px] block overflow-hidden rounded-md"
            >
              <div className="relative w-full h-full rounded-md">
                <Image
                  src={`/articles/${randomPost.imgUrl}`}
                  width={1200}
                  height={1200}
                  alt={randomPost.title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 rounded-md" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div className="flex text-white">
                    <h5 className="font-bold mt-2 uppercase text-sm text-left w-[10%]">
                      {randomPost.category}
                    </h5>
                    <span className="text-left mt-2 ml-4 text-sm">
                      <CreationDate articleNumber={randomPost.articleNumber} />
                    </span>
                  </div>
                  <h2 className="text-white text-2xl lg:text-4xl font-bold leading-snug">
                    {randomPost.title}
                  </h2>
                </div>
              </div>
            </Link>
          )}

          {/* Fixed post */}
          {money.length > 0 && (
            <Link
              href={`/post/${money[0].title.replace(/[^A-Za-z0-9]+/g, '-')}`}
              passHref
              className="relative h-[400px] block overflow-hidden rounded-md"
            >
              <div className="relative w-full h-full rounded-md">
                <Image
                  src={`/articles/${money[0].imgUrl}`}
                  width={1000}
                  height={1000}
                  alt={money[0].title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 rounded-md" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div className="flex text-white">
                    <h5 className="font-bold mt-2 uppercase text-sm text-left w-[10%]">
                      {money[0].category}
                    </h5>
                    <span className="text-left mt-2 ml-4 text-sm">
                      <CreationDate articleNumber={money[0].articleNumber} />
                    </span>
                  </div>
                  <h2 className="text-white text-2xl lg:text-4xl font-bold leading-snug">
                    {money[0].title}
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Column 3 */}
        <div className="space-y-6 col-span-12 md:col-span-3">
          {entertainment.slice(2, 4).map((post, index) => (
            <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`} passHref>
              <div className="relative block overflow-hidden">
                <div className="relative mb-6 w-full mx-auto">
                  <Image
                    src={`/articles/${post.imgUrl}`}
                    width={1000}
                    height={1000}
                    alt={post.title}
                    className="w-full h-[312px] object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black/60 rounded-md" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <div className="flex text-white">
                      <h5 className="font-bold mt-2 uppercase text-sm text-left ">
                        {post.category}
                      </h5>
                      <span className="text-left mt-2 ml-4 text-sm">
                        <CreationDate articleNumber={post.articleNumber} />
                      </span>
                    </div>
                    <h3 className="text-white text-xl mt-2 font-semibold">{post.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="grid grid-cols-1 gap-6">
            {entertainment.slice(5, 8).map((post, index) => (
              <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`} passHref>
                <div className="bg-grey-200 mt-2 w-full">
                  <Post3
                    pimg={`/articles/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
                    section={post.category}
                    articleNumber={post.articleNumber}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div className='max-w-7xl mt-20 mx-auto'>
      
      
      <h2 className="text-4xl mb-10 text-left font-bold uppercase text-black ">Discover Insights</h2>
     
  

    <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  justify-items-center  ">
            {randomArticles
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-grey-200 px-4 md:px-0">
                    <Posts
                      pimg={`/articles/${post.imgUrl}`}
                      pheading={post.title}
                      pcontent={post.contents}
                      articleNumber={post.articleNumber}
                      section= {post.category}
                      pauthor= {post.authorName}
                    />
                  </div>
                </Link>
              ))}
          </div>

      </div>
   
   
   </>
    
  );
};

export default Page;

