import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  activitiesFeatureKey,
  ActivityState,
} from '../reducers/activity.reducer';
import * as fromActivity from '../reducers/activity.reducer';

export const selectActivityState =
  createFeatureSelector<ActivityState>(activitiesFeatureKey);

export const selectAllActivities = createSelector(
  selectActivityState,
  fromActivity.selectAll
);

export const selectCurrentActivity = createSelector(
  selectActivityState,
  fromActivity.selectCurrentActivity
);

export const selectAllConsequences = createSelector(
  selectAllActivities,
  (activities) => activities.filter((x) => x.type === 'consequence')
);

export const selectAllRewards = createSelector(
  selectAllActivities,
  (activities) => activities.filter((x) => x.type === 'reward')
);
