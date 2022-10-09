import React from 'react'
import { rec_channels } from '../../public/data/recommendedChannels'
import { top_channels } from '../../public/data/topChannels'
import {RiMovieLine}    from "react-icons/ri"
import {BsDot}    from "react-icons/bs"
import Image from 'next/image'
import { useIsMobile} from '../../hooks/responsive'
import useHover from '../../hooks/useHover'

/**tengo que hacer el ishovered  */
const Sidebar = () => {
    const isMobile = useIsMobile();
    const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef} className={
        isMobile ? 'fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-primary overflow-scroll mobile-scrollbar pb-16'
        : `fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-primary overflow-scroll pb-16 ${isHovered ? 'scrollbar' : 'no-scrollbar'}`
        }>
        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm pb-4'>Recommended Channels</p>
            <p><RiMovieLine size={20} className="xl:hidden justify-center w-full"/></p>
        </div>
        {rec_channels.map((channel, index) => (
            <div key={index} className="inline-flex items-center w-full hover:opacity-70 cursor-pointer py-[2px]">
                <div className=''>
                        <Image src={channel?.avatar} width="30" height="30" alt="twitch channel image" />
                    </div>
                    <div className='hidden xl:flex justify-between w-full px-2'>
                        <div>
                            <p className=''>{channel?.username}</p>
                            <p className='text-gray-500'>{channel?.game_name}</p>
                        </div>
                        <p className='flex items-center'><BsDot size={40} color="red"/>{channel?.rank}K</p>
                    </div>
            </div>
        ))}
        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm pt-4 pb-2'>Top Channels</p>
            <p><RiMovieLine size={20} className="xl:hidden justify-center w-full"/></p>
        </div>
        {top_channels.map((channel, index) => (
            <div key={index} className="inline-flex items-center w-full hover:opacity-70 cursor-pointer py-[2px]">
                    <div>
                        <Image src={channel?.avatar} width="30" height="30" alt="twitch channel image" />
                    </div>
                    <div className='hidden xl:flex justify-between w-full px-2'>
                        <div>
                            <p className=''>{channel?.username}</p>
                            <p className='text-gray-500'>{channel?.game_name}</p>
                        </div>
                        <p className='flex items-center'><BsDot size={40} color="red"/>{channel?.rank}K</p>
                    </div>
            </div>
        ))} 
    </div>
  )
}

export default Sidebar