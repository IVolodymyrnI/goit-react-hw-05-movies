import { Suspense, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useFetchMovie } from 'hooks';
import { MovieInfo } from 'routes/MovieDetails/MovieInfo/MovieInfo';
import { AddInformation } from 'routes/MovieDetails/AddInformation/AddInformation';
import { BackButton } from 'routes/MovieDetails/BackButton/BackButton';

export default function MovieDetails() {
  const location = useLocation();
  const { id } = useParams();
  const { data: movie, ...status } = useFetchMovie({
    url: `/movie/${id}`,
  });
  const backHref = useRef(location.state?.from ?? '/movies');

  return (
    <>
      <BackButton backHref={backHref} />
      <MovieInfo movie={movie} status={status} />
      <AddInformation />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
