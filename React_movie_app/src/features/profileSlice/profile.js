import { createSlice } from '@reduxjs/toolkit';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const initialState = {
  user: currentUser || null,
  favoriteMovies: currentUser
    ? JSON.parse(localStorage.getItem(`${currentUser.email}-favoriteMovies`)) || []
    : [],
  watchNext: currentUser
    ? JSON.parse(localStorage.getItem(`${currentUser.email}-watchNext`)) || []
    : [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteMovies.push(action.payload);
      localStorage.setItem(
        `${state.user.email}-favoriteMovies`,
        JSON.stringify(state.favoriteMovies)
      );
    },
    removeFavorite: (state, action) => {
      state.favoriteMovies.splice(action.payload, 1);
      localStorage.setItem(
        `${state.user.id}-favoriteMovies`,
        JSON.stringify(state.favoriteMovies)
      );
    },
    reorderWatchNext: (state, action) => {
      state.watchNext = action.payload;
      localStorage.setItem(
        `${state.user.id}-watchNext`,
        JSON.stringify(state.watchNext)
      );
    },
 
  },
});

export const { addFavorite, removeFavorite, reorderWatchNext, setUser } = profileSlice.actions;

export default profileSlice.reducer;
