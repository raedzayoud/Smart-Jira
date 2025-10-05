import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
];
