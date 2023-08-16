import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Kid } from '../kid.model';
import { KidActions } from '../actions/kid.actions';

export const kidsFeatureKey = 'kids';

export interface KidState extends EntityState<Kid> {
  selectedKidId: string | undefined;
}

export const adapter: EntityAdapter<Kid> = createEntityAdapter<Kid>();

export const initialState: KidState = adapter.getInitialState({
  selectedKidId: undefined,
});

export const kidsFeature = createFeature({
  name: kidsFeatureKey,
  reducer: createReducer(
    initialState,
    on(KidActions.addKid, (state, action) => adapter.addOne(action.kid, state)),
    on(KidActions.upsertKid, (state, action) =>
      adapter.upsertOne(action.kid, state),
    ),
    on(KidActions.addKids, (state, action) =>
      adapter.addMany(action.kids, state),
    ),
    on(KidActions.upsertKids, (state, action) =>
      adapter.upsertMany(action.kids, state),
    ),
    on(KidActions.updateKid, (state, action) =>
      adapter.updateOne(action.kid, state),
    ),
    on(KidActions.updateKids, (state, action) =>
      adapter.updateMany(action.kids, state),
    ),
    on(KidActions.deleteKid, (state, action) =>
      adapter.removeOne(action.id, state),
    ),
    on(KidActions.deleteKids, (state, action) =>
      adapter.removeMany(action.ids, state),
    ),
    on(KidActions.loadKids, (state, action) =>
      adapter.setAll(action.kids, state),
    ),
    on(KidActions.clearKids, (state) => adapter.removeAll(state)),
    on(KidActions.selectCurrentKid, (state, { kid }) => {
      return { ...state, selectedKid: kid };
    }),
  ),
  extraSelectors: ({ selectKidsState }) => ({
    ...adapter.getSelectors(selectKidsState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } =
  kidsFeature;
