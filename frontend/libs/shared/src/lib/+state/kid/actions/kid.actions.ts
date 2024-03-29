import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Kid } from '../kid.model';

export const KidActions = createActionGroup({
  source: 'Kid/API',
  events: {
    'Load Kids Start': emptyProps(),
    'Load Kids': props<{ kids: Kid[] }>(),
    'Load Kids Failure': props<{ error: unknown }>(),
    'Add Kid': props<{ kid: Kid }>(),
    'Upsert Kid': props<{ kid: Kid }>(),
    'Upsert Kid Success': props<{ id: string }>(),
    'Upsert Kid Failure': props<{ error: unknown }>(),
    'Add Kids': props<{ kids: Kid[] }>(),
    'Upsert Kids': props<{ kids: Kid[] }>(),
    'Update Kid': props<{ kid: Update<Kid> }>(),
    'Update Kids': props<{ kids: Update<Kid>[] }>(),
    'Delete Kid': props<{ id: string }>(),
    'Delete Kid Success': props<{ id: string }>(),
    'Delete Kid Failure': props<{ error: unknown }>(),
    'Clear Kids': emptyProps(),
    'Select Current Kid': props<{ kid: Kid }>(),
  },
});
