import { Injectable } from '@angular/core';
import { Kid } from './kid.model';
import { Store } from '@ngrx/store';
import { selectAllKids, selectKidById } from './selectors/kid.selectors';
import { KidActions } from './actions/kid.actions';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KidService {
  selectById = (id: string) => this.store.select(selectKidById(id));
  constructor(private store: Store<Kid>) {}

  kids$ = this.store.select(selectAllKids);
  anyKids$ = this.kids$.pipe(map((kids) => kids?.length > 0 ?? false));

  loadKids = () => this.store.dispatch(KidActions.loadKidsStart());

  upsertKid(kid: Kid) {
    this.store.dispatch(KidActions.upsertKid({ kid }));
  }

  deleteKid(id: string) {
    this.store.dispatch(KidActions.deleteKid({ id }));
  }
}
