import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MovieDetails } from './movie-details/movie-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'movie',
    component: MovieDetails,
  },
];
