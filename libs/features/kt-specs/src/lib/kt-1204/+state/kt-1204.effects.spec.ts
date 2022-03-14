import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1204Actions from './kt-1204.actions';
import { Kt1204Effects } from './kt-1204.effects';

describe('Kt1204Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1204Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1204Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1204Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1204Actions.init() });

      const expected = hot('-a-|', { a: Kt1204Actions.loadKt1204Success({ kt1204: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
