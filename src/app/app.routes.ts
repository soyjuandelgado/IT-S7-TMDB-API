import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MovieDetails } from './movie-details/movie-details';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Register } from './register/register';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
  },
  {
    path: 'welcome',
    component: Welcome,
  },
  {
    path: 'home',
    component: Home,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'movie',
    component: MovieDetails,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
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
