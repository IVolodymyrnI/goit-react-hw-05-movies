import PropTypes from 'prop-types';
import { Genres } from '../Genres/Genres';
import { InfoWrapper, Poster } from './MovieInfoStyle';
import { BASE_IMG_URL } from 'constants/baseImgUrl';
import { MovieInfoSkelet } from 'routes/MovieDetails/MovieInfoSkelet/MovieInfoSkelet';

export function MovieInfo({ movie, status: { isResolved } }) {
  if (!isResolved) {
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

MovieInfo.propTypes = {
  movie: PropTypes.oneOfType([
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    }),
    PropTypes.shape({}),
  ]),
  status: PropTypes.shape({
    isPending: PropTypes.bool.isRequired,
    isRejected: PropTypes.bool.isRequired,
    isResolved: PropTypes.bool.isRequired,
    isIdle: PropTypes.bool.isRequired,
  }),
};
