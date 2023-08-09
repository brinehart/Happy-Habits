import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Activity } from '../activity.model';
import { ActivityActions } from '../actions/activity.actions';

export const activitiesFeatureKey = 'activities';

export interface ActivityState extends EntityState<Activity> {
  selectedActivity: Activity | null;
}

export const adapter: EntityAdapter<Activity> = createEntityAdapter<Activity>();

export const initialState: ActivityState = adapter.getInitialState({
  selectedActivity: null,
});

export const activityReducer = createReducer(
  initialState,
  on(ActivityActions.addActivity, (state, action) =>
    adapter.addOne(action.activity, state)
  ),
  on(ActivityActions.upsertActivity, (state, action) =>
    adapter.upsertOne(action.activity, state)
  ),
  on(ActivityActions.addActivities, (state, action) =>
    adapter.addMany(action.activities, state)
  ),
  on(ActivityActions.upsertActivities, (state, action) =>
    adapter.upsertMany(action.activities, state)
  ),
  on(ActivityActions.updateActivity, (state, action) =>
    adapter.updateOne(action.activity, state)
  ),
  on(ActivityActions.updateActivities, (state, action) =>
    adapter.updateMany(action.activities, state)
  ),
  on(ActivityActions.deleteActivity, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ActivityActions.deleteActivities, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ActivityActions.loadActivities, (state, action) =>
    adapter.setAll(action.activities, state)
  ),
  on(ActivityActions.clearActivities, (state) => adapter.removeAll(state)),
  on(ActivityActions.setCurrentActivity, (state, { activity }) => {
    return { ...state, selectedActivity: activity };
  })
);

export const activitiesFeature = createFeature({
  name: activitiesFeatureKey,
  reducer: activityReducer,
  extraSelectors: ({ selectActivitiesState }) => ({
    ...adapter.getSelectors(selectActivitiesState),
  }),
});

export const selectCurrentActivity = (state: ActivityState) =>
  state.selectedActivity;

export const { selectIds, selectEntities, selectAll, selectTotal } =
  activitiesFeature;
