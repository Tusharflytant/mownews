import allArticles from "@/constants/all";
import Image from "next/image";
import Link from "next/link";
import CreationDate from "@/components/Date";
import { Metadata } from "next";





// Format author name to URL-safe slug
const formatName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Generate static paths for all authors
export async function generateStaticParams() {
  const uniqueAuthors = Array.from(
    new Set(allArticles.map((article) => formatName(article.authorName)))
  );

  return uniqueAuthors.map((authorName) => ({ authorName }));
}

export async function generateMetadata({ params }: { params: Promise<{ authorName: string }> }): Promise<Metadata> {
  const { authorName } = await params;

  const author = allArticles.find(
    (article) => formatName(article.authorName) === authorName
  );

  return {
    title: author ? `Articles by ${author.authorName}` : 'Author Not Found',
  };
}

const AuthorPage = async ({ params }: { params: Promise<{ authorName: string }> }) => {
  const { authorName } = await params;

  const authorArticles = allArticles.filter(
    (article) => formatName(article.authorName) === authorName
  );

  if (authorArticles.length === 0) {
    return (
      <div className="mt-20 text-center text-3xl font-bold text-gray-800">
        Author Not Found
      </div>
    );
  }

  const author = authorArticles[0];

  return (

    <>
    <div className="px-6 md:px-10  lg:px-16 xl:px-24 mt-40">
      {/* Author Info Section */}
      <div className="px-6 sm:px-10 lg:px-36 mb-12">
  <div className="relative bg-white/80 backdrop-blur-xl border border-purple-200 rounded-3xl p-6 sm:p-10 shadow-md transition-all duration-300 hover:shadow-purple-300/40 hover:ring-2 hover:ring-purple-300">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <div className="relative">
        <Image
          src={`/authors/${author.authorName}.jpg`}
          alt={author.authorName}
          width={120}
          height={120}
          className="rounded-full border-4 border-purple-200 shadow object-cover size-28"
        />
  
      </div>
      <div className="text-center sm:text-left max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-900 mb-1">
          {author.authorName}
        </h1>
        <p className="text-sm text-purple-700 mb-3 font-medium uppercase tracking-wide">
          Sharing knowledge that matters
        </p>
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
          ✍️ A creative voice with a curious mind, {author.authorName} crafts compelling stories that simplify complexity and spark insight. Their writing blends clarity with authenticity — designed to educate, inspire, and resonate.
        </p>
        <Link
          href={`/authors/${author.authorName.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase()}`}
          className="mt-4 inline-block bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg font-semibold transition duration-300"
        >
          View All Articles →
        </Link>
      </div>
    </div>
  </div>
</div>



      {/* Articles List */}
      <h2 className=" text-xl mt-10 sm:text-3xl md:text-5xl max-w-7xl mx-auto hover:underline  cursor-pointer
          text-black font-bold">
        Expertise Of {author.authorName}
      </h2>
      <div className="grid max-w-7xl mx-auto grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {authorArticles.map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}>

             <Image
              src={`/articles/${post.imgUrl}`}
              width={1000}
              height={1000}
              alt={post.title}
              className='h-[250px] xl:h-[300px] w-full  shadow-md object-cover transition-transform duration-300 ease-in-out
               hover:scale-105 hover:brightness-110'
              />
            <h2 className='mt-3 text-xl line-clamp-2 text-left font-bold text-gray-900'>{post.title}</h2>
            <p className="text-gray-500 mb-2  mt-2 text-sm ">
                    <CreationDate articleNumber={post.articleNumber} />
                  </p>    
          
            
          </Link>
        ))}
      </div>
    </div>

    <div className='h-20 bg-white'></div>
       
     

    </>
  );
};

export default AuthorPage;
