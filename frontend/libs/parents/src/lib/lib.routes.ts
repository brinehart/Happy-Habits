import { Route } from '@angular/router';
import { ParentsPageComponent, SettingsComponent } from './components';

export const PARENTS_ROUTER_NAME = 'parents';

export const parentsRoutes: Route[] = [
  {
    path: '',
    component: ParentsPageComponent,
    children: [
      {
        path: '',
        component: SettingsComponent,
        outlet: PARENTS_ROUTER_NAME
      }
    ]
  },
];
