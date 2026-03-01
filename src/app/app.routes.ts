import { Routes } from '@angular/router';
import {Login} from './features/composants/login/login';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  //EagerLoading
  {
    path: 'login',
    component: Login
  },
  //LazyLoading
  {
    path: 'dashboard',
    loadComponent: () => import('./features/composants/dashboard/dashboard')
      .then(m => m.Dashboard),
    canActivate: [authGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./features/composants/register/register')
      .then(m => m.Register),
  },
  //eagerLoading
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  }


];
