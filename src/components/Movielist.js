import React, { useState, useEffect } from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import MovieSearch from './MovieSearch';

const MovieList = () => {
  const { movies } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [movies, searchTerm]);

  const notFoundUI = () => {
    return <h3 className="text-center fw-bold mt-4">No Results Found</h3>;
  };

  // Create a set to store distinct movie names
  const distinctMovieNames = new Set();
  const distinctMovies = [];

  // Filter distinct movies
  filteredMovies.forEach((movie) => {
    if (!distinctMovieNames.has(movie.movieName)) {
      distinctMovieNames.add(movie.movieName);
      distinctMovies.push(movie);
    }
  });

  const getMovieListing = () => {
    return (
      <div className="col-md-11 px-0">
        {distinctMovies.map((movie) => (
          <div
            className="card flex-row border-0 rounded-top shadow align-items-center justify-content-between p-2 px-3 mt-3"
            key={movie.movieName}
          >
            <div>
              <h3>{movie.movieName}</h3>
              <p className="mb-0">Rating: {movie.rating}/100</p>
            </div>
            <p className="mb-0 ps-1 small text-muted fw-bold text-nowrap">
              {movie.duration} Hrs
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="row justify-content-center">
      <MovieSearch searchTerm={searchTerm} handleSearch={handleSearch} />
      {movies.length > 1 && filteredMovies.length === 0
        ? notFoundUI()
        : getMovieListing()}
    </div>
  );
};

export default MovieList;

