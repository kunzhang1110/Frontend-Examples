import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap, tap } from 'rxjs/operators';
import { DataService } from '../../service/data.service';
import { UserActions } from './users.action';

@Injectable()
export class UsersEffect {
  constructor(private actions$: Actions, private dataService: DataService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      exhaustMap(() => {
        return this.dataService.getUsers().pipe(
          map((users) => {
            return UserActions.loadUsersSuccess({ users });
          }),
          catchError((error) => of(UserActions.loadUsersError({ error })))
        );
      })
    )
  );

  addUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      exhaustMap((action) => {
        return this.dataService.addUser(action.user).pipe(
          map((user) => {
            console.log(user);
            return UserActions.addUserSuccess({ user });
          }),
          catchError((error) => of(UserActions.addUserError({ error })))
        );
      })
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      exhaustMap((action) =>
        this.dataService.updateUser(action.user).pipe(
          map((user) => UserActions.updateUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.updateUserError({ error: error.message }))
          )
        )
      )
    )
  );

  deleteUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      exhaustMap((action) => {
        return this.dataService.deleteUser(action.id).pipe(
          map((user) => {
            return UserActions.deleteUserSuccess({ id: user.id! });
          }),
          catchError((error) => of(UserActions.addUserError({ error })))
        );
      })
    )
  );
}
