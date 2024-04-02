import { signalStore } from '@ngrx/signals';
import { FlightService } from '../data';
import { withDataService } from '@demo/shared/util-common';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const BookingStore = signalStore(
    { providedIn: 'root' },
    withDataService({
        dataServiceToken: FlightService,
        filter: { from: 'London', to: 'Paris' }
    }),
    withDevtools('booking'),
);
