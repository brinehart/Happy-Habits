import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as RouterActions from '../actions/router.actions';
import { KidService } from '../../kid';

@Injectable()
export class RouterEffects {
  redirectToAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        this.kidService.loadKids();
        return RouterActions.appInitCompleted();
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private kidService: KidService,
  ) {}
}
