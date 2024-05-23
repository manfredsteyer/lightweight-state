import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiCommonComponent } from '@flight-demo/ui-common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiCommonComponent],
  selector: 'flight-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miles';
}
