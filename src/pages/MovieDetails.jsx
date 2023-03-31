import { Suspense, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useFetchMovie } from 'hooks';
import { MovieInfo } from 'modules/MovieDetails/MovieInfo/MovieInfo';
import { AddInformation } from 'modules/MovieDetails/AddInformation/AddInformation';
import { BackButton } from 'modules/MovieDetails/BackButton/BackButton';

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
