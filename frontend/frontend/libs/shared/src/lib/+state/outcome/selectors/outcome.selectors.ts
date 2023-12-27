import { createFeatureSelector, createSelector } from '@ngrx/store';
import { outcomesFeatureKey, OutcomeState } from '../reducers/outcome.reducer';
import * as fromOutcome from '../reducers/outcome.reducer';

export const selectOutcomeState =
  createFeatureSelector<OutcomeState>(outcomesFeatureKey);

export const selectAllOutcomes = createSelector(
  selectOutcomeState,
  fromOutcome.selectAll
);

export const selectCurrentOutcome = createSelector(
  selectOutcomeState,
  fromOutcome.selectCurrentOutcome
);
