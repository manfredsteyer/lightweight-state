import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent, FormUpdateDirective } from '@demo/shared/ui-common';
import { FlightFilter } from '@demo/ticketing/data';
import { BookingStore } from '../booking.store';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, FlightCardComponent, FormUpdateDirective],
})
export class FlightSearchComponent {
  private store = inject(BookingStore);

  from = this.store.filter.from;
  to = this.store.filter.to;
  flights = this.store.entities;

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  search(): void {
    this.store.load();
  }

  updateFilter(filter: FlightFilter): void {
    this.store.updateFilter(filter);
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.store.updateSelected(flightId, selected);
  }

}
