import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'routes/common/SharedLayout/SharedLayout';
import { lazy } from 'react';

import { Home } from 'pages/Home';
import { NotFoundPage } from 'pages/NotFoundPage';
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('routes/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('routes/MovieDetails/Reviews/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
