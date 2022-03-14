import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1209Actions from './kt-1209.actions';
import { Kt1209Effects } from './kt-1209.effects';

describe('Kt1209Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1209Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1209Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1209Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1209Actions.init() });

      const expected = hot('-a-|', { a: Kt1209Actions.loadKt1209Success({ kt1209: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
