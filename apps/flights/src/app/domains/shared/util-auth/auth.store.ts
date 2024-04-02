import { signalStore, withState } from "@ngrx/signals";
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState({
        userId: 1
    }),
    withDevtools('auth'),
    // withComputed
    // withMethods
);
