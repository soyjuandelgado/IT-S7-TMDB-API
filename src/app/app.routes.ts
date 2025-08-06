import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MovieDetails } from './movie-details/movie-details';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Register } from './register/register';
// import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { authGuard } from './shared/auth/auth-guard';

//TODO: redireccion después del login a la url original
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
    canActivate: [authGuard],
  },
  {
    path: 'movie',
    component: MovieDetails,
    canActivate: [authGuard],
  },
  { 
    path: 'login', 
    component: Login,
  },
  { 
    path: 'register', 
    component: Register,
  },
  { 
    path: '**', 
    redirectTo: 'welcome' 
  },
];
