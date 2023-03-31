import { useFetchMovie } from 'hooks';
import { MovieList } from 'modules/common/MovieList/MovieList';

export function Home() {
  const { data, status } = useFetchMovie({ url: '/trending/movie/day' });
  const movies = data?.results || [];

	return (
    <>
      <h1>Trending today</h1>
      <MovieList moviesList={movies} status={status} />
    </>
  );
}
