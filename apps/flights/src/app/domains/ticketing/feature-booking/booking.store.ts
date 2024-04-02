import { signalStore } from '@ngrx/signals';
import { FlightService } from '../data';
import { withDataService } from '@demo/shared/util-common';

export const BookingStore = signalStore(
    { providedIn: 'root' },
    withDataService({
        dataServiceToken: FlightService,
        filter: { from: 'London', to: 'Paris' }
    })
);
