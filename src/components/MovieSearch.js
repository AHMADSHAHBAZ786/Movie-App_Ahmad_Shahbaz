import React from 'react';

const MovieSearch = ({ searchTerm, handleSearch }) => {
  return (
    <div className="col-md-8 col-sm-10 col-11 px-0 mb-4">
        <input
            type="text"
            className="form-control"
            placeholder="Search by Movie Name"
            value={searchTerm}
            onChange={handleSearch}
        />
    </div>
  );
};

export default MovieSearch;
