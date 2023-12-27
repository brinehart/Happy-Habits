import { Route } from '@angular/router';
import {
  KidsPageComponent,
  ListKidsComponent,
  ManageKidFormComponent,
  ManageKidsComponent,
} from './components';

export const KIDS_ROUTER_NAME = 'kids';

export const manageKidRoutes: Route[] = [
  {
    path: '',
    component: KidsPageComponent,
    children: [
      {
        path: '',
        component: ManageKidsComponent,
        outlet: KIDS_ROUTER_NAME,
      },
    ],
  },
  {
    path: 'add',
    component: KidsPageComponent,
    children: [
      {
        path: '',
        component: ManageKidFormComponent,
        outlet: KIDS_ROUTER_NAME,
        data: {
          mode: 'add',
        },
      },
    ],
  },
  {
    path: 'edit/:id',
    component: KidsPageComponent,
    children: [
      {
        path: '',
        component: ManageKidFormComponent,
        outlet: KIDS_ROUTER_NAME,
        data: {
          mode: 'edit',
        },
      },
    ],
  },
];

export const kidsRoutes: Route[] = [
  {
    path: '',
    component: KidsPageComponent,
    children: [
      {
        path: '',
        component: ListKidsComponent,
        outlet: KIDS_ROUTER_NAME,
      },
    ],
  },
];
