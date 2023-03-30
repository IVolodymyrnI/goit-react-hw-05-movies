import { API } from 'API/API';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MovieInfo } from 'modules/MovieDetails/MovieInfo/MovieInfo';
import { status } from 'constants';
import { AddInformation } from 'modules/MovieDetails/AddInformation/AddInformation';

const { PENDING, IDLE, REJECTED, RESOLVED } = status;

export function MovieDetails() {
  const location = useLocation();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(IDLE);
  const backHref = location.state?.from ? location.state.from : '/movies';

  useEffect(() => {
    if (!id) {
      return;
    }

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

      <MovieInfo movie={movie} status={status} />
      <AddInformation backHref={backHref} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
