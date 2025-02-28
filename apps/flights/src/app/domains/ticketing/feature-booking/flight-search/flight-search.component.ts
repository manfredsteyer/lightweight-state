import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '@demo/shared/ui-common';
import { BookingStore } from '../booking.store';

@Component({
    selector: 'app-flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    imports: [CommonModule, FormsModule, FlightCardComponent]
})
export class FlightSearchComponent {
  private store = inject(BookingStore);

  from = linkedSignal(() => this.store.filter.from());
  to = linkedSignal(() => this.store.filter.to());
  flights = this.store.entities;

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  search(): void {
    this.store.load();
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateSelected(flightId, selected);
  }

}
