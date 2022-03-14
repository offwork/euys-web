import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1320Actions from './kt-1320.actions';
import { Kt1320Effects } from './kt-1320.effects';

describe('Kt1320Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1320Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1320Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1320Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1320Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1320Actions.loadKt1320Success({ kt1320: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
