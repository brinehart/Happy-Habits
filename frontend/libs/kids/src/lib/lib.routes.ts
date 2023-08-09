import { Route } from '@angular/router';
import {
  KidsPageComponent,
  ListKidsComponent,
  ManageKidsComponent,
} from './components';

export const KIDS_ROUTER_NAME = 'kids';

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
  {
    path: 'manage',
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
        component: ManageKidsComponent,
        data: {
          mode: 'add',
        },
        outlet: KIDS_ROUTER_NAME,
      },
    ],
  },
  {
    path: 'edit/:id',
    component: KidsPageComponent,
    children: [
      {
        path: '',
        component: ManageKidsComponent,
        data: {
          mode: 'edit',
        },
        outlet: KIDS_ROUTER_NAME,
      },
    ],
  },
];
