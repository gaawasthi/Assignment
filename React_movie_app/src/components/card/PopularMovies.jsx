import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../features/authSlice/movieSlice';

const PopularMovies = () => {
 const dispatch = useDispatch()
 const {popular , loading , error} = useSelector((state)=>state.movies)

 useEffect(()=>{
  dispatch(fetchPopularMovies());
 },[dispatch])

  if (loading) return <p className="text-white m-5">Loading movies...</p>;
  if (error) return <p className="text-red-500 m-5">Error: {error}</p>;




  return (
    <div className=' mt-10 pt-5 ml-10 mr-10 pl-10 pr-10 '  >
 <h1 class="text-3xl text-white m-5 font-bold">
  Popular Movies.
</h1>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={6} 
        navigation
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
     
      >
        {popular.map((movie, index) => (
          <SwiperSlide key={index}>
            
            <MovieCard
               id={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              poster={movie.poster_path}
              release_date={movie.release_date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMovies;
