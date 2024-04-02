import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './next-flights.component';
import { CheckinComponent } from './checkin/checkin.component';
import { NextFlightsService } from './next-flights.service';
import { RouterModule } from '@angular/router';
import { NEXT_FLIGHTS_ROUTES } from './next-flights.routes';
import { FlightCardComponent } from '@demo/shared/ui-common';

@NgModule({
    declarations: [NextFlightsComponent, CheckinComponent],
    providers: [NextFlightsService],
    exports: [NextFlightsComponent],
    imports: [CommonModule, RouterModule.forChild(NEXT_FLIGHTS_ROUTES), FlightCardComponent]
})
export class NextFlightsModule {}
