import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1237Actions from './kt-1237.actions';
import { Kt1237Effects } from './kt-1237.effects';

describe('Kt1237Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1237Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1237Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1237Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1237Actions.init() });

      const expected = hot('-a-|', { a: Kt1237Actions.loadKt1237Success({ kt1237: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
