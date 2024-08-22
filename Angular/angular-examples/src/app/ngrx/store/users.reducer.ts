import { createReducer, on } from '@ngrx/store';

import { User } from '../models/user.model';
import { UserActions } from './users.action';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = createReducer(
  initialState,

  // Load Users
  on(UserActions.loadUsers, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(UserActions.loadUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users,
      loading: false,
    };
  }),
  on(UserActions.loadUsersError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  // Add User
  on(UserActions.addUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(UserActions.addUserSuccess, (state, { user }) => {
    return {
      ...state,
      users: [...state.users, user],
      loading: false,
    };
  }),
  on(UserActions.addUserError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  // Update User
  on(UserActions.updateUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(UserActions.updateUserSuccess, (state, { user }) => {
    return {
      ...state,
      users: state.users.map((u) => (u.id === user.id ? user : u)),
      loading: false,
    };
  }),
  on(UserActions.updateUserError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  // Delete User
  on(UserActions.deleteUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(UserActions.deleteUserSuccess, (state, { id }) => {
    console.log(id);
    return {
      ...state,
      users: state.users.filter((u) => u.id !== id),
      loading: false,
    };
  }),
  on(UserActions.deleteUserError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
