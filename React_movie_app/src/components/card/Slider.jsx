import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = () => {
  const [data, setData] = useState([]);
  const imageBase = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US&page=1"
        );
        setData(response.data.results.slice(0, 5));
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-180 relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative w-full h-screen bg-center bg-cover"
              style={{
                backgroundImage: `url(${imageBase}${movie.backdrop_path})`,
              }}
            >
           
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-black/80"></div>

              <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                  {movie.title}
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-lg drop-shadow-md">
                  {movie.overview}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
