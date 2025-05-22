import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/splash/splash.component').then(m => m.SplashComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/auth/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/auth/recover/recover.component').then(m => m.RecoverComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];
