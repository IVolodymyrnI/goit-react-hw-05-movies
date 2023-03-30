import { useState, useEffect } from 'react';
import { API } from 'API/API';
import { MovieList } from 'modules/common/MovieList/MovieList';
import { status } from 'constants';

const { PENDING, IDLE, REJECTED, RESOLVED } = status;

export function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(IDLE);

  useEffect(() => {
    setStatus(PENDING);

    API.fetchPopularMovie()
      .then(r => {
        setStatus(RESOLVED);
        setMovies(r.data.results);
      })
      .catch(error => {
        setStatus(REJECTED);
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList moviesList={movies} status={status} />
    </>
  );
}
