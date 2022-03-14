import { Component } from '@angular/core';
import { AppConfigService } from '@euys/core';
import { AppFacade } from './+state/app.facade';

@Component({
  selector: 'euys-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'kalite-kontrol';
  constructor(private appConfig: AppConfigService, private facade: AppFacade) {
     this.facade.init(this.appConfig.config);
  }
}
