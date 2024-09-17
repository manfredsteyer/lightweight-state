import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CityPipe, FormUpdateDirective } from '@demo/shared/ui-common';
import { Flight, FlightFilter, FlightService } from '@demo/ticketing/data';

// import { CheckinService } from '@demo/checkin/data';


@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent, FormUpdateDirective],
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = signal('Paris');
  to = signal('London');
  flights = signal<Flight[]>([]);

  basket = signal<Record<number, boolean>>({
    3: true,
    5: true,
  });

  search(): void {
    this.flightService.find(this.from(), this.to()).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  updateFilter(filter: FlightFilter) {
    console.log('updateFilter', filter);
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update((basket) => ({
      ...basket,
      [flightId]: selected,
    }));
  }

}
