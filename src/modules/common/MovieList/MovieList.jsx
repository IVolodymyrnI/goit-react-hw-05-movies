import { Link, useLocation } from 'react-router-dom';
import { MovieItem, MovieListStyle } from './MovieListStyle';
import { Loader } from '../Loader/Loader';
import { PropTypes } from 'prop-types';
import { status } from 'constants';

const { PENDING, IDLE, REJECTED, RESOLVED } = status;

export function MovieList({ moviesList, status }) {
  const location = useLocation();

  if ([IDLE, REJECTED].status) {
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

MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  status: PropTypes.shape({
    isPending: PropTypes.bool.isRequired,
    isRejected: PropTypes.bool.isRequired,
    isResolved: PropTypes.bool.isRequired,
    isIdle: PropTypes.bool.isRequired,
  }),
};
