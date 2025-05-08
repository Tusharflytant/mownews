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




const Posts: React.FC<PostProps> = ({ pimg, pheading , section , articleNumber}) => {
 
  
  return (
    <div className="flex  space-x-4  px-2">
  {/* Image on the left */}
  <div className="flex-shrink-0 w-24 h-[110px] overflow-hidden ">
    <Image
      src={pimg}
      className="object-cover w-full h-full"
      width={100}
      height={100}
      alt="Post Image"
      title="Post"
    />
  </div>

  {/* Text content on the right */}
  <div className="flex flex-col justify-between">
          <div className='flex '>
           <h5 className=' font-bold  uppercase text-gray-500  text-[12px] text-left   '> {section}</h5>
          
           </div>
    <h4 className="text-base line-clamp-2  font-semibold text-black leading-snug">
      {pheading}
    </h4>
    <span className="text-gray-500 text-left  text-sm">  <CreationDate articleNumber={articleNumber}/></span>
  </div>
</div>

  );
};

export default Posts;

 