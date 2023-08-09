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
        loadChildren: () => import('@hh/kids').then((m) => m.kidsRoutes),
      },
      {
        path: 'parents',
        loadChildren: () =>
          import('@hh/parents').then((m) => m.parentsRoutes),
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
