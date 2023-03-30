import { Link, Container, Nav } from './SharedLayoutStyle';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function SharedLayout() {
  return (
    <>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
