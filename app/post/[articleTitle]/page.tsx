
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from "@/components/Breadcrumb";
import Post3 from "@/components/Post3";
import Newsletter from "@/components/Newsletter";
import React from "react";

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

function getRandomArticles(articles: TArticle[], count: number) {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


const randomArticles = getRandomArticles(allArticles, 12);

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

// Metadata generation function, synchronously
export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );
 
  if (!article) {
    return {
      title: "Article Not Found",
      description: "No article found for the given title",
    };
  }
 
  const description = article.contents.at(-1) || "";
 
  return {
    title: article.title,
    description,
    openGraph: {
      url: `/${articleTitle}`,
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
  };
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  let headingCount = 0;

  return (
    <div className="bg-white min-h-screen">
      <div className="relative mt-20 px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
        {/* Main Article Section */}
        <div>
          <div className="max-w-4xl mt-20 ml-8 text-black">
            <Breadcrumb />
          </div>
          <h1 className="text-3xl mt-10 max-w-4xl mx-auto text-gray-800 sm:text-4xl lg:text-4xl font-extrabold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-col mt-8 lg:ml-6 sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6">
            <div className="text-gray-800 w-full flex flex-col lg:flex-row items-start lg:items-center  gap-3">
              {/* Author Info */}
              <div className="flex items-center gap-2">
                <Image
                  src={`/authors/${article.authorName}.jpg`}
                  alt={article.authorName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover object-center size-8"
                />
                <Link
                  href={`/authors/${article.authorName
                    .replace(/[^A-Za-z0-9]+/g, "-")
                    .toLowerCase()}`}
                >
                  <p className="text-gray-500 uppercase hover:text-black font-medium   text-md">
                    {article.authorName}
                  </p>
                </Link>
              </div>

              {/* Date + Read Time */}
              <div className="w-full flex  items-center lg:pr-1 lg:w-auto lg:justify-start gap-4 text-sm lg:text-base
               text-gray-500">
                <p>
                  <CreationDate articleNumber={article.articleNumber} />
                </p>
                <p>Read Time: {article.readTime}</p>
              </div>
            </div>
          </div>

          <Image
           src={`/articles/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="w-full max-w-4xl mt-12 mx-auto "
          />

          {/* ARTICLE CONTENT */}
          <div className="text-black/85 tracking-normal mx-auto mt-6 text-lg leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) => {
              const isHeading = content.includes("***");
              if (isHeading) headingCount++;

              return (
                <React.Fragment key={index}>
                  {/* Show Trending Around the Web after 3rd heading */}
                  {headingCount === 3 && isHeading && (
  <div className="mt-14 mb-12 px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-2xl shadow-md border-l-4 border-purple-600 p-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 flex items-center gap-2">
        🌐 Trending Around the Web
      </h3>

      <div className="flex flex-col gap-5">
        {allArticles
          .filter(
            (post) =>
              post.category === article.category &&
              post.title !== article.title
          )
          .slice(0, 4)
          .map((item, idx) => (
            <Link
              key={idx}
              href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                <Image
                  src={`/articles/${item.imgUrl}`}
                  height={1000}
                  width={1000}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900 hover:text-purple-700 line-clamp-2">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  </div>
)}


                  {/* Show Discover More from Section after 5th heading */}
                  {headingCount === 4 && isHeading && (
                    <div className="mt-12 mb-10 p-5 rounded-xl bg-purple-50 shadow-md">
                      <h3 className="text-xl uppercase font-semibold text-purple-900 mb-4">
                        💡 Discover More from {article.category}
                      </h3>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {allArticles
                          .filter(
                            (post) =>
                              post.category === article.category &&
                              post.title !== article.title
                          )
                          .slice(4, 5)
                          .map((item, index) => (
                            <Link
                              key={index}
                              href={`/post/${item.title.replace(
                                /[^A-Za-z0-9]+/g,
                                "-"
                              )}`}
                              className="flex items-center gap-4 w-full hover:bg-purple-100 transition rounded-lg p-2"
                            >
                              <Image
                                src={`/articles/${item.imgUrl}`}
                                alt={item.title}
                                width={100}
                                height={80}
                                className="rounded-md object-cover w-[100px] h-[80px] shrink-0"
                              />
                              <div className="text-left">
                                <p className="text-sm uppercase text-purple-600 font-medium mb-1">
                                  {item.category}
                                </p>
                                <p className="text-base text-gray-800 font-semibold">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}

          
                  {/* Main Content Rendering */}
                  {/\.(jpg)$/i.test(content) ? (
                    <Image
                      width={600}
                      height={400}
                      src={`/articles/${content}`}
                      alt="Image"
                      className="mt-4 w-full "
                    />
                  ) : isHeading ? (
                    <strong className="block text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    <p>{content}</p>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="sticky top-44 self-start h-fit  rounded-xl shadow-lg px-6 py-6 overflow-y-auto">
          <h2 className="text-black mt-2 hover:text-pink-500 hover:cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-xl mb-6">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {allArticles
                          .filter(
                            (post) =>
                              post.category === article.category &&
                              post.title !== article.title
                          ).slice(0, 3).map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              >
                <div className="bg-grey-200 mt-2 w-full">
                  <Post3
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
        </div>
      </div>

      <div className="max-w-4xl lg:mx-36 mt-20">
        <Newsletter />
      </div>

      {/* About Author */}
      <section className="mt-20 px-6 lg:mr-80 ">
  <div className="max-w-4xl mx-auto bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-sm">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <Image
        src={`/authors/${article.authorName}.jpg`}
        alt={article.authorName}
        width={96}
        height={96}
        className="rounded-full object-cover border-4 border-purple-100 shadow-md"
      />
      <div className="text-center sm:text-left flex-1">
        <h3 className="text-2xl font-bold text-purple-800 mb-2">
          {article.authorName}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          An insightful voice in the industry, crafting content that informs,
          inspires, and connects with readers.
        </p>
        <Link
          href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase()}`}
          className="inline-block text-sm font-medium text-purple-700 hover:underline transition"
        >
          View all articles →
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* Related Articles Section */}
      <div className='max-w-7xl mt-20 mx-auto'>
      
      
      <h2 className="text-4xl mb-10 ml-4 text-left font-bold uppercase text-black ">Continue Reading</h2>
     
  

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

      <div className="h-20 bg-white"></div>
     
    </div>
  );
};

export default PostPage;
