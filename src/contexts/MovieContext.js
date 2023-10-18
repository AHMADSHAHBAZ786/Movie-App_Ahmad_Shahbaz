import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const sortedMovies = [...movies];
  sortedMovies.sort((a, b) => parseFloat(b.duration) - parseFloat(a.duration));

  return (
    <MovieContext.Provider value={{ movies: sortedMovies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
