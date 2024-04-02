import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Ticket, TicketService } from "../data";
import { inject } from "@angular/core";

export const TicketStore = signalStore(
    { providedIn: 'root' },
    withState({
        tickets: [] as Ticket[]
    }),
    withMethods((store, ticketService = inject(TicketService)) => ({
        loadByPassenger(passengerId: number) {
            ticketService.load(passengerId).subscribe(
                (tickets) => {
                    patchState(store, { tickets });
                }
            );
        }
    }))
);







/*
 loadByPassenger: rxMethod<number>(pipe(
            switchMap((id) => ticketService.load(id).pipe(
                tap((tickets) => patchState(store, { tickets })),
                catchError((error) => {
                    console.error('error', error);
                    return of([]);
                })
            ))
        ))
*/
