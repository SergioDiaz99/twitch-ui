import Image from 'next/image';
import React from 'react';

interface Props {
    img?: string | any;
    title?: string;
    viewers?: string;
    tag1?: string ;
    tag2?: string ;
}

const CategoriesItem: React.FC<Props> = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className='p-2 '>
      <div className='hover:bg-twitchColor'>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img className='cursor-pointer hover:translate-x-1 hover:-translate-y-1 duration-100 z-[100]' src={img} width='261' height='350' alt='/' />
      </div>
      <div>
        <p className='font-bold truncate'>{title}</p>
        <p className='text-sm text-gray-500 py-[2px]'>{viewers}</p>
        <div className='flex gap-2'>
          <div>
            <div className='flex'>
                <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3 '>
                {tag1}
                </p>
            </div>
          </div>
          <div>
            {tag2 ? (
              <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3'>
                {tag2}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItem;
