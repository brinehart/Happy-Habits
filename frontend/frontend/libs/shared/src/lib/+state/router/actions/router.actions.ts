import { createAction } from '@ngrx/store';

export enum RouterActionTypes {
  AppInitStarted = '[App] App initialization started',
  AppInitCompleted = '[App] App initialization completed',
  HydrateUserDataStarted = '[App] Hydrate user data started',
  hydrateUserDataSuccess = '[App] Hydrate user data completed successfully',
    hydrateUserDataFailed = '[App] Hydrate user data failed'
}

export const appInitStarted = createAction(RouterActionTypes.AppInitStarted);

export const appInitCompleted = createAction(
  RouterActionTypes.AppInitCompleted
);

export const hydrateUserDataStarted = createAction(
  RouterActionTypes.HydrateUserDataStarted
);

export const hydrateUserDataSuccess = createAction(
  RouterActionTypes.hydrateUserDataSuccess
);

export const hydrateUserDataFailed = createAction(
  RouterActionTypes.hydrateUserDataFailed
);
