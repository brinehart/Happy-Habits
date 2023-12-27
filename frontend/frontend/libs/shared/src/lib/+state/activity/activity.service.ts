import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Activity } from './activity.model';
import {
  selectAllActivities,
  selectAllConsequences,
  selectAllRewards,
} from './selectors/activity.selectors';
import { ActivityActions } from './actions/activity.actions';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private store: Store<Activity>) {}

  selectAll = () => this.store.select(selectAllActivities);

  selectAllConsequences = () => this.store.select(selectAllConsequences);

  selectAllRewards = () => this.store.select(selectAllRewards);

  addActivity(activity: Activity) {
    this.store.dispatch(ActivityActions.addActivity({ activity }));
  }

  addActivities(activities: Activity[]) {
    this.store.dispatch(ActivityActions.addActivities({ activities }));
  }

  upsertActivity(activity: Activity) {
    this.store.dispatch(ActivityActions.upsertActivity({ activity }));
  }

  upsertActivities(activities: Activity[]) {
    this.store.dispatch(ActivityActions.upsertActivities({ activities }));
  }

  deleteActivity(id: string) {
    this.store.dispatch(ActivityActions.deleteActivity({ id }));
  }

  deleteActivities(ids: string[]) {
    this.store.dispatch(ActivityActions.deleteActivities({ ids }));
  }
}
