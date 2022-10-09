import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'
import { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect ( () => {
    scrollTo(0,0)
  },[])

  return (
    <div className='pt-[60px] flex w-full'>
        <Sidebar />
        <Main />
    </div>
  )
}

export default Home
