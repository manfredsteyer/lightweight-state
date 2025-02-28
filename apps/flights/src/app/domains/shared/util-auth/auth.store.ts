import { signalStore, withState } from "@ngrx/signals";
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const AuthStore = signalStore(
    { providedIn: 'root', protectedState: false },
    withState({
        userId: 2
    }),
    withDevtools('auth'),
    // withComputed
    // withMethods
);
