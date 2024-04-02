import { Injectable, computed, inject } from '@angular/core';
import { AuthStore } from '@demo/shared/util-auth';
import { TicketStore } from './tickets.store';

@Injectable()
export class NextFlightsService {
  private authStore = inject(AuthStore);
  private ticketStore = inject(TicketStore);

  readonly tickets = this.ticketStore.tickets;
  readonly flights = computed(() => this.tickets().map(t => t.flight));
  
  load(): void {
    this.ticketStore.loadByPassenger(this.authStore.userId());
  }
}
