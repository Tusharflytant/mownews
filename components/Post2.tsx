import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';




interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  section: string;
  articleNumber: number
}





const Post2: React.FC<PostProps> = ({ pimg, pheading , articleNumber , section}) => {
 
  
  return (
    <div className="   w-full ">
      
        <div className="bg-white sm:px-4 lg:px-0 px-6  w-full">
          <Image
            src={pimg}
            className="h-[250px] sm:h-[220px] md:h-[200px]  object-cover mb-2 rounded-sm"
            width={1000}
            height={1000}
            alt="Post Image"
            
            title="Post"
          />
          <div className='flex '>
           <h5 className=' font-bold mt-2 uppercase text-gray-500  text-sm text-left   w-[20%]'> {section}</h5>
           <span className="text-gray-500 text-left mt-2 ml-4 text-sm">  <CreationDate articleNumber={articleNumber}/></span>
           </div>
          <h4 className="mt-2  text-xl line-clamp-3 hover:text-purple-700 sm:text-2xl lg:text-xl tracking-wide text-left text-gray-900 font-bold
           title-font mb-8">
          {pheading}
          </h4>
         
        </div>
      
    </div>
  );
};

export default Post2;

 