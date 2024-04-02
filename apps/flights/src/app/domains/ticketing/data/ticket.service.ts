import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '@demo/shared/util-config';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  load(passengerId: number): Observable<Ticket[]> {
    const url = `${this.configService.config.baseUrl}/booking`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { passengerId, expand: true };

    return this.http.get<Ticket[]>(url, { headers, params });
  }

}
