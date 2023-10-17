import React from 'react'
import Movieform from './Movieform'
import MovieList from './Movielist';

const LandingPage = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-11 px-0">
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <Movieform />
          </div>
          <div className="col-md-6">
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage