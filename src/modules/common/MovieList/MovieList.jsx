import { Link, useLocation } from 'react-router-dom';
import { MovieItem, MovieListStyle } from './MovieListStyle';
import { status } from 'constants';
import { Loader } from '../Loader/Loader';

const { RESOLVED, IDLE, REJECTED, PENDING } = status;

export function MovieList({ moviesList, status }) {
  const location = useLocation();

  if ([REJECTED, IDLE].includes(status)) {
    return null;
  }

  if (status === PENDING) {
    return <Loader />;
  }

  if (status === RESOLVED) {
    return (
      <MovieListStyle>
        {moviesList.map(({ original_title, id }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </MovieItem>
        ))}
      </MovieListStyle>
    );
  }
}
