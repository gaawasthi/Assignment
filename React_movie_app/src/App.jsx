import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

import MovieNavbar from './components/card/Navbar';
import Footer from './components/card/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MovieDetail from './pages/MovieDetail';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Provider store={store}>

        <div className="flex flex-col min-h-screen">
          <MovieNavbar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>

          <Footer />
        </div>

    </Provider>
  );
};

export default App;
