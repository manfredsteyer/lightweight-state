import { signalStore, withState } from "@ngrx/signals";

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState({
        userId: 1
    }),
    // withComputed
    // withMethods
);
