import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '@demo/shared/util-logger';

@Component({
    selector: 'app-passenger-search',
    imports: [CommonModule],
    templateUrl: './passenger-search.component.html',
    styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent {
  constructor(logger: LoggerService) {
    logger.info('passenger search', 'info');
  }
}
