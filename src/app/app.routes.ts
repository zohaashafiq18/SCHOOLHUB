import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Students } from './features/students/students';
import { Classes } from './features/classes/classes';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'students', component: Students },
  { path: 'classes', component: Classes },
];