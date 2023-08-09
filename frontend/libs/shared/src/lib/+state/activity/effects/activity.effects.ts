import { Injectable } from '@angular/core';
import { StorageService } from '../../../services';
import { Actions } from '@ngrx/effects';
import { Activity } from '../activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService<Activity>
  ) {}
}
