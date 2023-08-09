import { Injectable } from '@angular/core';
import { StorageService } from '../../../services';
import { Actions } from '@ngrx/effects';
import { Kid } from '../kid.model';

@Injectable({
  providedIn: 'root',
})
export class KidEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService<Kid>
  ) {}
}
