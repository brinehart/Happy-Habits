import { createFeatureSelector, createSelector } from '@ngrx/store';
import { kidsFeatureKey, KidState } from '../reducers/kid.reducer';
import * as fromKid from '../reducers/kid.reducer';

export const selectKidState = createFeatureSelector<KidState>(kidsFeatureKey);

export const selectAllKids = createSelector(selectKidState, fromKid.selectAll);

export const selectCurrentKid = createSelector(
  selectKidState,
  fromKid.selectCurrentKid
);
