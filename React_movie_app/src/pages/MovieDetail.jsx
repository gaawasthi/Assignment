import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/profileSlice/profile";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US`
        );
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const data = await response.json();
        setMovieDetail(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleMovie();
  }, [id]);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!movieDetail) return null;

  const handleAddFav = () => {
    dispatch(
      addFavorite({
        id: movieDetail.id,
        title: movieDetail.title,
        poster_path: movieDetail.poster_path,
        vote_average: movieDetail.vote_average,
        release_date: movieDetail.release_date,
      })
    );
    alert("Added to favorite");
  };

  const images = [
    movieDetail.poster_path && `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
    movieDetail.backdrop_path && `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {images.length > 0 && (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${movieDetail.title} Slide ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <h1 className="text-4xl mt-10 font-bold mb-6">{movieDetail.title}</h1>
      <p className="mb-6">{movieDetail.overview || "No overview available."}</p>

      <button
        onClick={handleAddFav}
        className="border bg-blue-500 hover:bg-blue-600 text-white text-xl px-6 py-2 rounded transition"
      >
        Add to Favorite
      </button>
    </div>
  );
};

export default MovieDetail;
