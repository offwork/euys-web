import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1243Actions from './kt-1243.actions';
import { Kt1243Effects } from './kt-1243.effects';

describe('Kt1243Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1243Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1243Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1243Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1243Actions.init() });

      const expected = hot('-a-|', { a: Kt1243Actions.loadKt1243Success({ kt1243: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
