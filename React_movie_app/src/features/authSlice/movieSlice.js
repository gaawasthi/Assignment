

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'bc17906574f644dfdbba58c366c22e10';

export const fetchUpcomingMovies = createAsyncThunk(
  'movies/fetchUpcomingMovies',
  async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
       console.log( 'error fetching  movies');
      
    }
  }
);

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      return console.log( 'error fetching  movies');
    }
  }
);

export const fetchingTopRatedmovie = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async ()=> {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      return console.log( 'error fetching  movies');
    }
  }
);


const initialState = {
  upcoming: JSON.parse(localStorage.getItem('upcomingMovies')) || [],
  popular: JSON.parse(localStorage.getItem('popularMovies')) || [],
  top_rated: JSON.parse(localStorage.getItem('top_ratedMovies')) ||[],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.upcoming = action.payload;
        localStorage.setItem('upcomingMovies', JSON.stringify(action.payload));
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload;
        localStorage.setItem('popularMovies', JSON.stringify(action.payload));
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchingTopRatedmovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchingTopRatedmovie.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
        localStorage.setItem('top_ratedMovies', JSON.stringify(action.payload));
      })
      .addCase(fetchingTopRatedmovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default moviesSlice.reducer;
