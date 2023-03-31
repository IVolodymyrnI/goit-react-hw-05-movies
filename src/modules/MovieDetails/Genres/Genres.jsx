import { GenreList, GenreItem } from './GenresStyle';
import PropTypes from 'prop-types';

export function Genres({ genreList }) {
  return (
    <GenreList>
      {genreList.map(({ id, name }) => (
        <GenreItem key={id}>{name}</GenreItem>
      ))}
    </GenreList>
  );
}

Genres.propTypes = {
  genreList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
