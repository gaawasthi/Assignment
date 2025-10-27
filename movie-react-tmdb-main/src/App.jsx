import React from 'react';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-purple-950 to-black min-h-screen  ">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="movies/:id" element={<MovieDetail />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/search/:q" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </Provider>
    </div>
  );
};

export default App;
