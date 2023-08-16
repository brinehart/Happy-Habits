import { Injectable } from '@angular/core';
import { StorageService } from '../../../services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Kid } from '../kid.model';
import { catchError, concatMap, map } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { KidActions } from '../actions/kid.actions';

@Injectable({
  providedIn: 'root',
})
export class KidEffects {
  loadKids$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KidActions.loadKidsStart),
      concatMap(() =>
        from(this.storageService.getAll<Kid>('kids')).pipe(
          map((kids) => {
            return kids !== undefined
              ? KidActions.loadKids({ kids })
              : KidActions.loadKidsFailure({
                  error: 'No kids found',
                });
          }),
          catchError((error) => of(KidActions.loadKidsFailure({ error }))),
        ),
      ),
    ),
  );

  upsertKids$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KidActions.upsertKid),
      concatMap(({ kid }) =>
        from(this.storageService.upsertOne(kid, 'kids')).pipe(
          map(() => KidActions.upsertKidSuccess({ id: kid.id })),
          catchError((error) => of(KidActions.upsertKidFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private storageService: StorageService<Kid>,
  ) {}
}
