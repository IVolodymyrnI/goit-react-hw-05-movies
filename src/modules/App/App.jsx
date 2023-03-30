import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'modules/common/SharedLayout/SharedLayout';
import { lazy } from 'react';

import { Home } from 'Page/Home';
import { MovieDetails } from 'Page/MovieDetails';
const Movies = lazy(() => import('Page/Movies'));
const Cast = lazy(() => import('modules/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('modules/MovieDetails/Reviews/Reviews'));

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
    </Routes>
  );
}
