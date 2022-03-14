import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Pfdm3102Actions from './pfdm-3102.actions';
import { Pfdm3102Effects } from './pfdm-3102.effects';

describe('Pfdm3102Effects', () => {
  let actions: Observable<Action>;
  let effects: Pfdm3102Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Pfdm3102Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Pfdm3102Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Pfdm3102Actions.init() });

      const expected = hot('-a-|', {
        a: Pfdm3102Actions.loadPfdm3102Success({ pfdm3102: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
