import { Link, AddInfWrapper, AddInfTitle } from './AddInformationStyle';

export function AddInformation({ backHref }) {
  return (
    <AddInfWrapper>
      <AddInfTitle>Additional information</AddInfTitle>
      <Link to="cast" state={{ from: backHref }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: backHref }}>
        Reviews
      </Link>
    </AddInfWrapper>
  );
}
