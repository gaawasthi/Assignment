import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  
  const navigate  = useNavigate()
       const imageBase = "https://image.tmdb.org/t/p/original/"
      const   {id,title , vote_average , poster , release_date } = props

  return (
    <div onClick={()=>{navigate(`/movies/${id}`)}}  className="w-50  h-80 rounded-xl overflow-hidden shadow-md relative group transform transition duration-300 hover:scale-105 hover:shadow-xl mb-15">
      <img
        src={`${imageBase}${poster}`}
        alt={title}
        className="w-full h-96 object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>

      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full text-white text-sm font-semibold">
        <FaStar className="text-yellow-400 text-sm" />
        {vote_average}
      </div>

      <div className="absolute bottom-3 left-3 right-3 text-white">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
