import { ProviderToken, inject } from "@angular/core";
import { patchState, signalStoreFeature, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, tap, switchMap, catchError, of, Observable } from "rxjs";

export type CallState = 'init' | 'loading' | 'loaded' | { error: unknown };

export interface Entity {
    id: string | number
}

export type Filter = Record<string, unknown>;

export interface DataService<F extends Filter, E extends Entity> {
    load(filter: F): Observable<E[]>;
}

export function withDataService<E extends Entity, F extends Filter>(options: { dataServiceToken: ProviderToken<DataService<F, E>>; filter: F }) {
    return signalStoreFeature(
        withState({
            state: 'init' as CallState,
            filter: options.filter,
            entities: [] as E[],
            selectedIds: {} as Record<number, boolean>
        }),
        withMethods((
            store,
            dataService = inject(options.dataServiceToken)
        ) => ({
            updateFilter(filter: F) {
                patchState(store, { filter });
            },
            updateSelected(id: number, selected: boolean): void {
                patchState(store, (store) => ({
                    selectedIds: {
                        ...store.selectedIds,
                        [id]: selected
                    }
                }));
            },
            load: rxMethod<void>(pipe(
                tap(() => patchState(store, { state: 'loading' })),
                switchMap(() => dataService.load(store.filter()).pipe(
                    tap((entities) => patchState(store, { entities, state: 'loaded' })),
                    catchError((error) => {
                        patchState(store, { state: { error } });
                        return of([]);
                    })
                ))
            ))
        }))
    )
}
