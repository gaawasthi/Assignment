import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { discoverMovies, fetchByGenre, setPage } from '../redux/features/movieSlice';
import Loading from '../components/Loading';

const Movies = () => {
  const dispatch = useDispatch();
  const { discover, loading, error, page, total_pages } = useSelector(
    (state) => state.movies
  );

  const [genre, setGenre] = useState("");

  const genresList = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];

  useEffect(() => {
    if (genre) {
      dispatch(fetchByGenre({ genreId: Number(genre), page }));
    } else {
      dispatch(discoverMovies(page));
    }
  }, [dispatch, page, genre]);

  return (
    <div className="p-5 mt-15 min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center text-3xl text-amber-50 space-y-2 mb-10">
            <div>Filter by Genre</div>
            <div>
              <select
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
                name="genre"
                className="text-black bg-white px-2 py-1 rounded"
              >
                <option value="">Select genre</option>
                {genresList.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {discover.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                poster={movie.poster_path}
                release_date={movie.release_date}
              />
            ))}
          </div>

          <div className="flex gap-6 justify-center items-center mt-10">
            <button
              disabled={page === 1}
              onClick={() => dispatch(setPage(page - 1))}
              className="text-lg border border-gray-500 px-4 py-1 rounded-lg text-white disabled:opacity-50"
            >
              ← Previous
            </button>

            <span className="text-white text-lg font-semibold">
              Page {page} / {total_pages}
            </span>

            <button
              disabled={page === total_pages}
              onClick={() => dispatch(setPage(page + 1))}
              className="text-lg border border-gray-500 px-4 py-1 rounded-lg text-white disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
