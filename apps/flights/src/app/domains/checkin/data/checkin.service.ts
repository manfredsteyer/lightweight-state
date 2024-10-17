import { Injectable } from '@angular/core';

import { AuthService } from '@demo/shared/util-auth';

console.log(AuthService);

@Injectable({
  providedIn: 'root',
})
export class CheckinService {
  checkin(ticketNumber: string): void {
    console.log('checking in', ticketNumber);
  }
}
