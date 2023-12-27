import { Injectable } from '@angular/core';
import { StorageService } from '../../../services';
import { Actions } from '@ngrx/effects';
import { Outcome } from '../outcome.model';

@Injectable({
  providedIn: 'root',
})
export class OutcomeEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService<Outcome>
  ) {}
}
