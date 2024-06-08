import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import {
  selectError,
  selectLoading,
  selectUsers,
} from '../store/users.selector';
import { UserState } from '../store/users.reducer';
import { Observable } from 'rxjs';
import { UserActions } from '../store/users.action';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-effect-examples',
  templateUrl: './effect-examples.component.html',
  styleUrl: './effect-examples.component.scss',
})
export class EffectExamplesComponent {
  protected users$: Observable<User[]>;
  protected isLoading$: Observable<boolean>;
  protected hasError$: Observable<any>;
  protected form: FormGroup;
  private _editingUser: User | null = null;

  constructor(private _store: Store<UserState>) {
    this.users$ = this._store.select(selectUsers);
    this.isLoading$ = this._store.select(selectLoading);
    this.hasError$ = this._store.select(selectError);
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this._store.dispatch(UserActions.loadUsers());
  }

  onSubmit(): void {
    if (this._editingUser) {
      this._store.dispatch(
        UserActions.updateUser({
          user: { ...this._editingUser, ...this.form.value },
        })
      );
      this._editingUser = null;
    } else {
      this._store.dispatch(
        UserActions.addUser({ user: { ...this.form.value } })
      );
    }
    this.form.reset();
  }

  onEdit(user: User): void {
    this._editingUser = user;
    this.form.patchValue(user);
  }

  onDelete(id: string): void {
    this._store.dispatch(UserActions.deleteUser({ id }));
  }
}
