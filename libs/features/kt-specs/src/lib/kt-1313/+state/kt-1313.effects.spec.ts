import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1313Actions from './kt-1313.actions';
import { Kt1313Effects } from './kt-1313.effects';

describe('Kt1313Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1313Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1313Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1313Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1313Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1313Actions.loadKt1313Success({ kt1313: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
