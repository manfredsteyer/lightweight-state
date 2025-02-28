/* eslint-disable @softarc/sheriff/deep-import */
import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  NgZone,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CityPipe } from '../city.pipe';
import { StatusToggleComponent } from '../status-toggle/status-toggle.component';
// eslint-disable-next-line @softarc/sheriff/dependency-rule

const initFlight = {
  id: 0,
  from: '',
  to: '',
  date: '',
  delayed: false,
};

@Component({
    selector: 'app-flight-card',
    imports: [CommonModule, CityPipe, StatusToggleComponent],
    templateUrl: './flight-card.component.html',
    styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);

  private dialog = inject(MatDialog);

  @Input() item = initFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }

  edit() {
    // this.dialog.open(FlightEditReactiveComponent, {
    //   data: { flight: this.item },
    // });
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}
