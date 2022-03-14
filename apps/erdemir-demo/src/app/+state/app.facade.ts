import { Injectable } from '@angular/core';
import { AppConfiguration } from '@euys/core';
import { Store } from '@ngrx/store';
import * as AppActions from './app.actions';

@Injectable()
export class AppFacade {
  constructor(private store: Store) {}

  init(config: AppConfiguration) {
    this.store.dispatch(AppActions.setInitialState({ config }));
  }
}
