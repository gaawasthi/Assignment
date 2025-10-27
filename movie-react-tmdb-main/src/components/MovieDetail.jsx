import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../redux/features/movieSlice";
import { addToFavorite } from "../redux/features/authSlice";
import { Heart, Clock } from "lucide-react";
import Loading from "./Loading";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading, error } = useSelector((state) => state.movies);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (id) dispatch(fetchMovieDetail(id));
  }, [dispatch, id]);

  const isFavorite = currentUser?.favorites?.some(
    (fav) => fav.id === movieDetail?.id
  );

  const handleAddFavorite = () => {
    if (!movieDetail) return;
    const movieData = {
      id: movieDetail.id,
      title: movieDetail.title,
      poster_path: movieDetail.poster_path,
      vote_average: movieDetail.vote_average,
      release_date: movieDetail.release_date,
    };
    dispatch(addToFavorite(movieData));
    alert("Added to favorites");
  };

  if (loading) return <Loading/>
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!movieDetail) return null;

  return (
    <div className="min-h-screen bg-black mt-10 text-white p-5">
      <div className="w-[100vh] mx-auto flex flex-col md:flex-row gap-6 mt-10">
        <img
          className="w-full md:w-1/3 rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{movieDetail.title}</h1>
          {movieDetail.tagline && (
            <p className="italic text-gray-300">"{movieDetail.tagline}"</p>
          )}
          <p className="text-gray-400">
            {movieDetail.overview}
          </p>

         
           { 
            currentUser ? (  <div className="flex gap-3 mt-5">
            <button
              onClick={handleAddFavorite}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md"
            >
              <Heart size={18} /> {isFavorite ? "Added" : "Add to Favorites"}
            </button>

            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md">
              <Clock size={18} /> Watch Next
            </button>
          </div>) : null

           }
         
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
