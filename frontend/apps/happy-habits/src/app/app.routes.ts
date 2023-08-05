import { Route } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'kids',
      },
      {
        path: 'kids',
        loadComponent: () => import('@hh/kids').then((m) => m.KidsComponent),
      },
      {
        path: 'parents',
        loadComponent: () =>
          import('@hh/parents').then((m) => m.ParentsPageComponent),
      },
      {
        path: 'rewards',
        loadComponent: () =>
          import('@hh/rewards').then((m) => m.RewardsComponent),
      },
      {
        path: 'consequences',
        loadComponent: () =>
          import('@hh/consequences').then((m) => m.ConsequencesComponent),
      },
    ],
  },
];
