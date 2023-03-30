import { Header, Link, Container, Nav } from './SharedLayoutStyle';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
