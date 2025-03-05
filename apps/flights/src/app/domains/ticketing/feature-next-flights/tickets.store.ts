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
  { providedIn: 'root', protectedState: false },
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

