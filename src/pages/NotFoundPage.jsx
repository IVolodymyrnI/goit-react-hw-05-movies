import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <h1>Error 404</h1>
      <p>{`It seems this page doesn't exist =(`}</p>
      <p>
        You might try and search
        <Link to="/">
          <b>this page</b>
        </Link>
      </p>
    </>
  );
}
