import { API } from 'API/API';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
  BackButton,
  Link,
  AddInfWrapper,
  AddInfTitle,
} from './MovieDetailsStyle';
import { MovieInfo } from 'modules/MovieDetails/MovieInfo/MovieInfo';
import { status } from 'constants';

const { PENDING, IDLE, REJECTED, RESOLVED } = status;

export function MovieDetails() {
  const location = useLocation();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(IDLE);

  useEffect(() => {
    setStatus(PENDING);

    API.fetchMovieById(id)
      .then(r => {
        setMovie(r.data);
        setStatus(RESOLVED);
      })
      .catch(error => {
        setStatus(REJECTED);
        console.log(error.message);
      });
  }, [id]);

  return (
    <>
      <NavLink to={location.state.from}>
        <BackButton type="button">Go back</BackButton>
      </NavLink>
      <MovieInfo movie={movie} status={status} />
      <AddInfWrapper>
        <AddInfTitle>Additional information</AddInfTitle>
        <Link to="cast" state={{ from: location.state.from }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state.from }}>
          Reviews
        </Link>
      </AddInfWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
