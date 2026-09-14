import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'metiers',
    loadComponent: () =>
      import('./pages/metiers/metiers.component').then((m) => m.MetiersComponent),
  },
  {
    path: 'realisations',
    loadComponent: () =>
      import('./pages/realisations/realisations.component').then(
        (m) => m.RealisationsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
