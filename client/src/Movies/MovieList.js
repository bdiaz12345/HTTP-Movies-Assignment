import React from "react";
import { Link, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const history = useHistory()

  const goToAdd = () => {
    history.push('/add-movie')
  }
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
      <button onClick={goToAdd}>Add a Movie</button>
    </div>
  );
}

export default MovieList;
