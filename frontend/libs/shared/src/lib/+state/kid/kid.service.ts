import { Injectable } from '@angular/core';
import { Kid } from './kid.model';
import { Store } from '@ngrx/store';
import { selectAllKids } from './selectors/kid.selectors';
import { KidActions } from './actions/kid.actions';

@Injectable({
  providedIn: 'root',
})
export class KidService {
  constructor(private store: Store<Kid>) {}

  kids$ = this.store.select(selectAllKids);

  addKid(kid: Kid) {
    this.store.dispatch(KidActions.addKid({ kid }));
  }

  addKids(kids: Kid[]) {
    this.store.dispatch(KidActions.addKids({ kids }));
  }

  upsertKid(kid: Kid) {
    this.store.dispatch(KidActions.upsertKid({ kid }));
  }

  upsertKids(kids: Kid[]) {
    this.store.dispatch(KidActions.upsertKids({ kids }));
  }

  deleteKid(id: string) {
    this.store.dispatch(KidActions.deleteKid({ id }));
  }

  deleteKids(ids: string[]) {
    this.store.dispatch(KidActions.deleteKids({ ids }));
  }
}
