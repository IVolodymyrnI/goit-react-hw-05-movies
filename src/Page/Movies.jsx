import { API } from 'API/API';
import { MovieList } from 'modules/common/MovieList/MovieList';
import { SearchForm } from 'modules/Movies/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { status } from 'constants';

const { PENDING, IDLE, REJECTED, RESOLVED } = status;

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(IDLE);

  const onSubmit = ({ name }) => {
    const query = name !== '' ? { name } : {};
    setParams(query);
  };

  useEffect(() => {
    const query = params.get('name');

    if (!query) {
      return;
    }

    setStatus(PENDING);

    API.fetchMovieByName(query)
      .then(r => {
        setStatus(RESOLVED);
        setMovies(r.data.results);
      })
      .catch(error => {
        setStatus(REJECTED);
        console.log(error.message);
      });
  }, [params]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <MovieList moviesList={movies} status={status} />
    </>
  );
}
