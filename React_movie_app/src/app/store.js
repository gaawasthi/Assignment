import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  authReducer  from '../features/authSlice/authSlice';
import movieReducer from '../features/authSlice/movieSlice'

const reducer = combineReducers({
  auth: authReducer,
  movies:movieReducer
});
export const store = configureStore({
  reducer: reducer,
});
export default store;
