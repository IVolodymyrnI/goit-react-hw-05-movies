import { GenreList, GenreItem } from './GenresStyle';

export function Genres({ genreList }) {
  return (
    <GenreList>
      {genreList.map(({ id, name }) => (
        <GenreItem key={id}>{name}</GenreItem>
      ))}
    </GenreList>
  );
}
