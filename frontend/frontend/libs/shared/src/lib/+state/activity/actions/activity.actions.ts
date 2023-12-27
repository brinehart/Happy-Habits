import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Activity } from '../activity.model';

export const ActivityActions = createActionGroup({
  source: 'Activity/API',
  events: {
    'Load Activities': props<{ activities: Activity[] }>(),
    'Add Activity': props<{ activity: Activity }>(),
    'Upsert Activity': props<{ activity: Activity }>(),
    'Add Activities': props<{ activities: Activity[] }>(),
    'Upsert Activities': props<{ activities: Activity[] }>(),
    'Update Activity': props<{ activity: Update<Activity> }>(),
    'Update Activities': props<{ activities: Update<Activity>[] }>(),
    'Delete Activity': props<{ id: string }>(),
    'Delete Activities': props<{ ids: string[] }>(),
    'Clear Activities': emptyProps(),
    'Set Current Activity': props<{ activity: Activity }>(),
  },
});
