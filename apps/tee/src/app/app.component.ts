import { Component } from '@angular/core';
import { AppConfigService } from '@euys/core';
import { AppFacade } from './+state/app.facade';

@Component({
  selector: 'euys-tee-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent {
  constructor(private appConfig: AppConfigService, private facade: AppFacade) {
    this.facade.init(this.appConfig.config);
  }
}
