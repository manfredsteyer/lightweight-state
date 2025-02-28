import { Component, inject } from '@angular/core';
import { TicketStore } from './tickets.store';

@Component({
    selector: 'app-next-flights',
    templateUrl: './next-flights.component.html',
    styleUrls: ['./next-flights.component.css'],
    standalone: false
})
export class NextFlightsComponent {
  store = inject(TicketStore);

  flights = this.store.flights;

  constructor() {
    this.store.loadByPassenger();
  }
}
