import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUserState,
  (userState) => userState.users
);

export const selectLoading = createSelector(
  selectUserState,
  (userState) => userState.loading
);

export const selectError = createSelector(
  selectUserState,
  (userState) => userState.error
);
