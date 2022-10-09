import React from 'react'
import LiveVideo from '../LiveVideo/LiveVideo'
import LiveChannels from '../LiveChannels/LiveChannels'
import IconBar from '../IconBar/IconBar'
import Categories from '../Categories/Categories'

const Main = () => {
  return (
    <div className='absolute left-[60px] md:left-[40px] xl:left-[215px]'>
        <div id="live">
          <LiveVideo />
          <LiveChannels />
        </div>
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main