import React from 'react';
import './App.css';
import MovieList from './Component/MovieList';
import Banner from './Component/Banner';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MovieList title="Trending" url="https://api.themoviedb.org/3/discover/movie?api_key=08f3b1b71e34abfe2c008d99a51219e7&sort_by=popularity.desc"/>
      <MovieList title="Netflix Original" url="https://api.themoviedb.org/3/discover/tv?api_key=08f3b1b71e34abfe2c008d99a51219e7&with_networks=213"/>
      <MovieList title="Popular TV Show" url="https://api.themoviedb.org/3/discover/tv?api_key=08f3b1b71e34abfe2c008d99a51219e7&sort_by=popularity.desc"/>
      <MovieList title="New Release" url="https://api.themoviedb.org/3/discover/movie?api_key=08f3b1b71e34abfe2c008d99a51219e7&primary_release_year=2020"/>
      <MovieList title="US TV Drama" url="https://api.themoviedb.org/3/discover/tv?api_key=08f3b1b71e34abfe2c008d99a51219e7&language=en-us&page=2"/>
    </div>
  );
}

export default App;
