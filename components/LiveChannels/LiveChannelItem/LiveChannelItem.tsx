import Image from 'next/image'
import React from 'react'

interface Props {
    title?: string;
    user?: string;
    game?: string;
    previewImg?: string | any;
    profileImg?: string | any;
}

const LiveChannelItem: React.FC<Props> = ({title, user, game, previewImg, profileImg}) => {
  return (
    <div className='p-2'>
        <div className='hover:bg-twitchColor'>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img className='cursor-pointer hover:translate-x-1 hover:-translate-y-1 duration-100 z-[100] w-full h-full' src={previewImg} alt="" width="auto" height="auto"/>
        </div>

        <div className='flex pt-2 '>
            <div className='pr-2'>
                <Image className='rounded-full' src={profileImg} alt="profile image" width="40" height="40"/>
            </div>
            <div className=''>
                <div className='w-full'>
                    <p className='text-sm font-bold truncatee'>{title}</p>
                </div>
                <p className='text-sm text-gray-500'>{user}</p>
                <p className='text-sm text-gray-500'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChannelItem