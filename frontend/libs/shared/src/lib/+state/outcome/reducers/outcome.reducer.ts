import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Outcome } from '../outcome.model';
import { OutcomeActions } from '../actions/outcome.actions';

export const outcomesFeatureKey = 'outcomes';

export interface OutcomeState extends EntityState<Outcome> {
  selectedOutcome: Outcome | null;
}

export const adapter: EntityAdapter<Outcome> = createEntityAdapter<Outcome>();

export const initialState: OutcomeState = adapter.getInitialState({
  selectedOutcome: null,
});

export const outcomeReducer = createReducer(
  initialState,
  on(OutcomeActions.addOutcome, (state, action) =>
    adapter.addOne(action.outcome, state)
  ),
  on(OutcomeActions.upsertOutcome, (state, action) =>
    adapter.upsertOne(action.outcome, state)
  ),
  on(OutcomeActions.addOutcomes, (state, action) =>
    adapter.addMany(action.outcomes, state)
  ),
  on(OutcomeActions.upsertOutcomes, (state, action) =>
    adapter.upsertMany(action.outcomes, state)
  ),
  on(OutcomeActions.updateOutcome, (state, action) =>
    adapter.updateOne(action.outcome, state)
  ),
  on(OutcomeActions.updateOutcomes, (state, action) =>
    adapter.updateMany(action.outcomes, state)
  ),
  on(OutcomeActions.deleteOutcome, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(OutcomeActions.deleteOutcomes, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(OutcomeActions.loadOutcomes, (state, action) =>
    adapter.setAll(action.outcomes, state)
  ),
  on(OutcomeActions.clearOutcomes, (state) => adapter.removeAll(state)),
  on(OutcomeActions.setCurrentOutcome, (state, { outcome }) => {
    return { ...state, selectedOutcome: outcome };
  })
);

export const outcomesFeature = createFeature({
  name: outcomesFeatureKey,
  reducer: outcomeReducer,
  extraSelectors: ({ selectOutcomesState }) => ({
    ...adapter.getSelectors(selectOutcomesState),
  }),
});

export const selectCurrentOutcome = (state: OutcomeState) =>
  state.selectedOutcome;

export const { selectIds, selectEntities, selectAll, selectTotal } =
  outcomesFeature;
