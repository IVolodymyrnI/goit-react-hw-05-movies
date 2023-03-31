import { useFetchMovie } from 'hooks';
import { MovieList } from 'modules/common/MovieList/MovieList';

const popular = '/trending/movie/day';

export function Home() {
  const { data, status } = useFetchMovie({ url: popular });
  const movies = data?.results || [];

	return (
    <>
      <h1>Trending today</h1>
      <MovieList moviesList={movies} status={status} />
    </>
  );
}
