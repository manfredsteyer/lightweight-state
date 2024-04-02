import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { ConfigService } from '@demo/shared/util-config';
import { FlightFilter } from './flight-filter';
import { DataService } from '@demo/shared/util-common';

@Injectable({
  providedIn: 'root',
})
export class FlightService implements DataService<FlightFilter, Flight> {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  load(filter: FlightFilter): Observable<Flight[]> {
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = filter;

    return this.http.get<Flight[]>(url, { headers, params });
  }

  loadById(id: string): Observable<Flight> {
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { id };

    return this.http.get<Flight>(url, { headers, params });
  }
}
