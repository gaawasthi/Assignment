import React from 'react'
import Slider from '../components/card/Slider'
import PopularMovies from '../components/card/PopularMovies'
import Toprated from '../components/card/TopRated'
import Upcomming from '../components/card/UpcomingMovie'
import Footer from '../components/card/Footer'

const Home = () => {
  return (
    <div className='bg-black shadow-2xl border-b border-gray-800 relative' >
      <Slider/>
      <PopularMovies/>
      <Toprated/>
      <Upcomming/>

    </div>
  )
}

export default Home