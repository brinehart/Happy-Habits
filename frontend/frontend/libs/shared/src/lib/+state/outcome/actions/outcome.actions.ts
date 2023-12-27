import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Outcome } from '../outcome.model';

export const OutcomeActions = createActionGroup({
  source: 'Outcome/API',
  events: {
    'Load Outcomes': props<{ outcomes: Outcome[] }>(),
    'Add Outcome': props<{ outcome: Outcome }>(),
    'Upsert Outcome': props<{ outcome: Outcome }>(),
    'Add Outcomes': props<{ outcomes: Outcome[] }>(),
    'Upsert Outcomes': props<{ outcomes: Outcome[] }>(),
    'Update Outcome': props<{ outcome: Update<Outcome> }>(),
    'Update Outcomes': props<{ outcomes: Update<Outcome>[] }>(),
    'Delete Outcome': props<{ id: string }>(),
    'Delete Outcomes': props<{ ids: string[] }>(),
    'Clear Outcomes': emptyProps(),
    'Set Current Outcome': props<{ outcome: Outcome }>(),
  },
});
