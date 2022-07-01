import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieList from './components/MovieList';
import AboutUs from './components/AboutUs';
import SingleMovie from './components/SingleMovie';
import React, { useEffect, useState } from "react";


function App() {

  const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6bd2f87c212a016945bb7783c8671cc2&language=en-US&page=1')
            .then((response) => response.json())
            .then(moviesList => {
                setMovies(moviesList.results);
            });
    }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movielist" element={<MovieList movies={movies} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
