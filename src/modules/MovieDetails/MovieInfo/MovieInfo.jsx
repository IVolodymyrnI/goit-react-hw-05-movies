import { Genres } from '../Genres/Genres';
import { InfoWrapper, Poster } from './MovieInfoStyle';
import { BASE_IMG_URL } from 'constants/baseImgUrl';
import { status } from 'constants';
import { MovieInfoSkelet } from 'modules/MovieDetails/MovieInfoSkelet/MovieInfoSkelet';

const { RESOLVED } = status;

export function MovieInfo({ movie, status }) {
  if (status !== RESOLVED) {
    return <MovieInfoSkelet />;
  }

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;
  const yearOfRelease = new Date(release_date).getFullYear();
  const scorePercentage = Math.round(vote_average * 10);

  return (
    <InfoWrapper>
      <Poster
        src={BASE_IMG_URL + poster_path}
        alt=""
        width={200}
        height={300}
      />
      <div>
        <h2>{`${original_title} (${yearOfRelease})`}</h2>
        <span>User score: {scorePercentage}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <Genres genreList={genres} />
      </div>
    </InfoWrapper>
  );
}
