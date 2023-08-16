import { createSelector } from '@ngrx/store';
import { kidsFeature } from '../reducers/kid.reducer';

export const selectAllKids = createSelector(
  kidsFeature.selectAll,
  (kids) => kids,
);

export const selectCurrentKid = createSelector(
  kidsFeature.selectKidsState,
  kidsFeature.selectAll,
  (state, kids) => kids.find((kid) => kid.id === state.selectedKidId),
);
