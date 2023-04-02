import { InfoWrapper, Poster } from '../MovieInfo/MovieInfoStyle';

export function MovieInfoSkelet() {
  return (
    <InfoWrapper>
      <Poster src="" alt="" width={200} height={300} />
      <div>
        <h2>Loading...</h2>
        <span>User score: Loading...</span>
        <h3>Overview</h3>
        <p>Loading...</p>
        <h4>Genres</h4>
        <p>Loading...</p>
      </div>
    </InfoWrapper>
  );
}
