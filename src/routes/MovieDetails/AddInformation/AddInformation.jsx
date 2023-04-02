import { Link, AddInfWrapper, AddInfTitle } from './AddInformationStyle';

export function AddInformation() {
  return (
    <AddInfWrapper>
      <AddInfTitle>Additional information</AddInfTitle>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </AddInfWrapper>
  );
}
