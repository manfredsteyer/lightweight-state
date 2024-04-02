import { Component, computed, inject } from '@angular/core';
import { NextFlightsService } from './next-flights.service';

@Component({
  selector: 'app-next-flights',
  templateUrl: './next-flights.component.html',
  styleUrls: ['./next-flights.component.css'],
})
export class NextFlightsComponent {
  nextFlightsService = inject(NextFlightsService);

  tickets = this.nextFlightsService.tickets;
  flights = computed(() => this.tickets().map(t => t.flight));

  constructor() {
    this.nextFlightsService.load();
  }
}
