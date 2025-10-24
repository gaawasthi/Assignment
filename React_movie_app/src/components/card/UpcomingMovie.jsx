import React, { useEffect } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../features/authSlice/movieSlice';


const Upcoming = () => {
  const dispatch = useDispatch();
  const { upcoming, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) return <p className="text-white m-5">Loading movies...</p>;
  if (error) return <p className="text-red-500 m-5">Error: {error}</p>;
  return (
    <div className="ml-10 mr-10 pl-10 pr-10">
      <h1 className="text-3xl text-white m-5 font-bold">Upcoming Movies</h1>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {upcoming.map((movie) => (
          <SwiperSlide key={movie.id}>
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

export default Upcoming;
