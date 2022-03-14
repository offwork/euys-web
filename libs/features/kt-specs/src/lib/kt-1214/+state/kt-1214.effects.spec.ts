import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1214Actions from './kt-1214.actions';
import { Kt1214Effects } from './kt-1214.effects';

describe('Kt1214Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1214Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1214Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1214Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1214Actions.init() });

      const expected = hot('-a-|', { a: Kt1214Actions.loadKt1214Success({ kt1214: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
