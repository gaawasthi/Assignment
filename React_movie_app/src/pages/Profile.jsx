import React, { useEffect, useState } from 'react';
import MovieCard from '../components/card/MovieCard';

const Profile = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [favoriteMovie , setFavoriteMovie] =useState(null)
   const id = loggedUser.email

   const favorite = localStorage.getItem(`${id}-favoriteMovies`)
     setFavoriteMovie(JSON.parse(favorite))

  useEffect(() => {
    const u = localStorage.getItem('currentUser');
    if (u) {
      setLoggedUser(JSON.parse(u)); 
    }
  }, []); 
 
  return (
    <div>
      {loggedUser ? (
        <h1>Hello {loggedUser.name}</h1>
      ) : (
        <h1>Loading user...</h1>
      )}
 {
    favoriteMovie.map((movie , key)=>(
        <MovieCard key={key} 
        id = {favoriteMovie.id }
        title ={favoriteMovie.title}
        vote_average = {favoriteMovie.poster_path}
        poster={favoriteMovie.vote_average}
        release_date= {favoriteMovie.release_date}
         
        />
    ))
 }        
    </div>
  );
};

export default Profile;
