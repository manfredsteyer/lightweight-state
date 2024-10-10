import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Ticket, TicketService } from '../data';
import { computed, inject } from '@angular/core';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { AuthStore } from '@demo/shared/util-auth';

export const TicketStore = signalStore(
  { providedIn: 'root' },
  withState({
    tickets: [] as Ticket[],
  }),
  withComputed((store) => ({
    flights: computed(() => store.tickets().map((t) => t.flight)),
  })),
  withMethods(
    (
      store,
      ticketService = inject(TicketService),
      authStore = inject(AuthStore)
    ) => ({
      loadByPassenger(passengerId?: number) {
        if (typeof passengerId == 'undefined') {
          passengerId = authStore.userId();
        }

        ticketService.load(passengerId).subscribe((tickets) => {
          patchState(store, { tickets });
        });
      },
    })
  ),
  withDevtools('ticket')
);

/*
 loadByPassenger: rxMethod<number>(pipe(
            switchMap((id) => ticketService.load(id).pipe(
                tap((tickets) => patchState(store, { tickets })),
                catchError((error) => {
                    console.error('error', error);
                    return of([]);
                })
            ))
        ))
*/
