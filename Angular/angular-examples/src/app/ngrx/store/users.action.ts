import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models/user.model';


export const UserActions = createActionGroup({
    source: 'Users',
    events: {
        'Load Users': emptyProps(),
        'Load Users Success': props<{ users: User[] }>(),
        'Load Users Error': props<{ error: any }>(),
        'Add User': props<{ user: User }>(),
        'Add User Success': props<{ user: User }>(),
        'Add User Error': props<{ error: any }>(),
        'Update User': props<{ user: User }>(),
        'Update User Success': props<{ user: User }>(),
        'Update User Error': props<{ error: any }>(),
        'Delete User': props<{ id: string }>(),
        'Delete User Success': props<{ id: string }>(),
        'Delete User Error': props<{ error: any }>(),
    },
});