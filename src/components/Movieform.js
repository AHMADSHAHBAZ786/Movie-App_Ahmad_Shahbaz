import React, { useState } from 'react';
import { useMovieContext } from '../contexts/MovieContext';

const AddMovieForm = () => {
  const { addMovie } = useMovieContext();
  const [newMovie, setNewMovie] = useState({ movieName: '', rating: '', duration: '' });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.movieName && newMovie.rating && newMovie.duration) {
      if(isValidDuration(newMovie.duration)) {
        addMovie({...newMovie, duration: convertDurationToHours(newMovie.duration)});
        setNewMovie({ movieName: '', rating: '', duration: '' });
      }
      else {
        setError(true);
      }
    }
  };
  const isValidDuration = (duration) => {
    const durationRegex = /^(\d+(\.\d+)?(h|m))$/;
    return durationRegex.test(duration);
  };
  const convertDurationToHours = (durationString) => {
    const match = durationString.match(/(\d*\.?\d*)\s*([hm])/);
    const value = parseFloat(match[1]);
    const unit = match[2];
    if (unit === 'h') {
      return value;
    } else if (unit === 'm') {
      return value / 60;
    }
  }  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
    if(error) {
      setError(false)
    }
  };
  const getDurationAlert = () => {
    return (
      <div className="alert alert-danger d-flex align-items-center mt10 mb10" role="alert">
          Please specify duration in hours or minutes (e.g 2.5h or 150m)
      </div>
    )
  }
  
  return (
    <div className="card p-4 border-0 shadow rounded mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="movieName" className="form-label">Movie Name</label>
          <input type="text" className="form-control" required
            value={newMovie.movieName}
            name="movieName"
            placeholder="Enter Movie Name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label"> Ratings</label>
          <input type="number" className="form-control" required value={newMovie.rating}
            min="1"
            max="100"
            name="rating"
            placeholder="Enter Rating on a scale of 1 to 100"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input type="text" className="form-control" required
            value={newMovie.duration}
            name="duration"
            placeholder="Enter Duration in hours or minutes"
            onChange={handleChange}
          />
        </div>
        {error && getDurationAlert()}
        <div className="text-end">
          <button type="submit" className="btn btn-success mt-3"> Add Movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
