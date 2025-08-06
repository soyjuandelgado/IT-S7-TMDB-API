import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MovieDetails } from './movie-details/movie-details';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  {
    path: '',
    component: Welcome,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'movie',
    component: MovieDetails,
  },
  { 
    path: 'login', 
    component: Login,
  },
  { 
    path: 'register', 
    component: Register,
  },
];
