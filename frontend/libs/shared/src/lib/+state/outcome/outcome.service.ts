import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Outcome } from './outcome.model';
import { OutcomeActions } from './actions/outcome.actions';
import {
  selectAllOutcomes,
  selectCurrentOutcome,
} from './selectors/outcome.selectors';

@Injectable({
  providedIn: 'root',
})
export class OutcomeService {
  constructor(private store: Store<Outcome>) {}

  selectAll = () => this.store.select(selectAllOutcomes);

  selectCurrentOutcome = () => this.store.select(selectCurrentOutcome);

  addOutcome(outcome: Outcome) {
    this.store.dispatch(OutcomeActions.addOutcome({ outcome }));
  }

  addOutcomes(outcomes: Outcome[]) {
    this.store.dispatch(OutcomeActions.addOutcomes({ outcomes }));
  }

  upsertOutcome(outcome: Outcome) {
    this.store.dispatch(OutcomeActions.upsertOutcome({ outcome }));
  }

  upsertOutcomes(outcomes: Outcome[]) {
    this.store.dispatch(OutcomeActions.upsertOutcomes({ outcomes }));
  }

  deleteOutcome(id: string) {
    this.store.dispatch(OutcomeActions.deleteOutcome({ id }));
  }

  deleteOutcomes(ids: string[]) {
    this.store.dispatch(OutcomeActions.deleteOutcomes({ ids }));
  }
}
